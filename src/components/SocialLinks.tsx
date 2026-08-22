import React from 'react';
import { MessageSquare, Send, Code2, GitPullRequest, AtSign, ArrowUpRight } from 'lucide-react';
import { profileData, SocialLink } from '../data/portfolio';
import { PiggyTailArrow } from './PiggyTailArrow';
import { GithubIcon } from './GithubIcon';

export const SocialLinks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5 text-black" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-black" />;
      case 'Send':
        return <Send className="w-5 h-5 text-black" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-black" />;
      case 'GitPullRequest':
        return <GitPullRequest className="w-5 h-5 text-black" />;
      case 'AtSign':
        return <AtSign className="w-5 h-5 text-black" />;
      default:
        return <GithubIcon className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="socials" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header with PiggyTail Arrow */}
      <div className="relative mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#5865F2]/10 text-[#5865F2] px-3 py-1 text-xs font-mono mb-2">
            <span>CONNECT & CONTACT</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Socials & GitHub Ecosystem
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Reach out directly or explore my open-source activity across GitHub.
          </p>
        </div>

        {/* PiggyTail Arrow pointing to Socials */}
        <PiggyTailArrow
          label="accept friend request!"
          variant="curly-pointer"
          color="#5865F2"
          className="hidden md:block"
        />
      </div>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.socials.map((social: SocialLink, idx: number) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#11131c] p-6 dx-card-shadow dx-card-hover flex flex-col justify-between"
          >
            {/* Top accent bar */}
            <div 
              className="absolute top-0 left-0 w-full h-1" 
              style={{ backgroundColor: social.color }} 
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-10 h-10 flex items-center justify-center font-bold"
                  style={{ backgroundColor: social.color }}
                >
                  {getIcon(social.iconName)}
                </div>

                {social.badgeText && (
                  <span className="px-2 py-0.5 bg-[#1a1d2e] text-[10px] font-mono text-slate-300">
                    {social.badgeText}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#00f2fe] transition-colors mb-1">
                {social.name}
              </h3>

              <p className="text-sm font-mono text-slate-400 mb-6">
                {social.handle}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 text-xs font-mono font-bold text-slate-300 group-hover:text-[#00f2fe] transition-colors">
              <span>VISIT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};
