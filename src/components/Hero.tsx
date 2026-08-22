import React from 'react';
import { Terminal, Layers, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolio';
import { PiggyTailArrow } from './PiggyTailArrow';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">

      {/* Background Glow Block */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00f2fe]/10 via-[#8b5cf6]/10 to-[#10b981]/10 blur-[90px] pointer-events-none -z-10" />

      {/* Grid Header Badge */}
      <div className="flex flex-col items-start gap-4 mb-8">

        <div className="inline-flex items-center gap-2 bg-[#141724] px-3 py-1.5 text-xs font-mono text-[#00f2fe]">
          <span className="w-2 h-2 bg-[#00f2fe] animate-pulse"></span>
          <span className="text-slate-400">mopsgamer.github.io</span>
        </div>

        {/* Main Heading */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Hi there <span className="relative inline-block animate-bounce">
              🌵
              {/* PiggyTail Arrow positioned relative to the name */}
              <PiggyTailArrow
                label="be careful!"
                variant="loop-right"
                color="#ff0077"
                className="not-md:hidden absolute -top-14 -left-14 pointer-events-none"
              />
            </span>
            I'm{' '}
            {/* Wrap the name in a relative span to anchor the arrow to it */}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#10b981]">
                Lev
              </span>

              {/* PiggyTail Arrow positioned relative to the name */}
              <PiggyTailArrow
                label="open source contributor!"
                variant="loop-down"
                color="#00f2fe"
                className="not-md:hidden absolute -top-22 -left-12 pointer-events-none"
              />
            </span>
            , and I'm trying to <span className="underline decoration-[#00f2fe] decoration-wavy decoration-2">fix stuff</span>.
          </h1>
        </div>


        {/* Tagline */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-normal leading-relaxed mt-2">
          {profileData.tagline}
        </p>
      </div>

      {/* Interactive DX Badges & Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 max-w-3xl">
        {profileData.quickStats.map((stat, idx) => (
          <a
            key={idx}
            href={stat.url || "#"}
            target={stat.url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group p-4 bg-[#11131c] hover:bg-[#161a26] transition-all dx-card-shadow flex flex-col justify-between"
          >
            <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
              {stat.label}
            </div>
            <div className="text-lg font-mono font-bold text-[#00f2fe] group-hover:translate-x-1 transition-transform flex items-center justify-between mt-2">
              <span>{stat.value}</span>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#00f2fe]" />
            </div>
          </a>
        ))}
      </div>

      {/* Action Buttons & Handwritten Annotations */}
      <div className="relative flex flex-wrap items-center gap-4 pt-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#00f2fe] text-black font-mono font-bold text-sm hover:bg-[#38bdf8] transition-all dx-button-shadow flex items-center gap-2"
        >
          <Layers className="w-4 h-4" />
          <span>EXPLORE FLOATING PROJECTS</span>
        </a>

        <a
          href="#bootstrap"
          className="px-6 py-3 bg-[#151824] hover:bg-[#1f2436] text-white font-mono font-bold text-sm transition-all dx-button-shadow flex items-center gap-2"
        >
          <Terminal className="w-4 h-4 text-[#10b981]" />
          <span>LINUX BOOTSTRAP</span>
        </a>
      </div>

    </section>
  );
};
