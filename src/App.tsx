import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { TerminalBootstrap } from './components/TerminalBootstrap';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { PiggyTailArrow } from './components/PiggyTailArrow';
import { projectsData, Project } from './data/portfolio';
import { Layers } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 bg-dx-grid relative selection:bg-[#00f2fe] selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Hero Section */}
      <main>
        <Hero />

        {/* Floating Projects & Active PRs Section */}
        <section id="projects" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto relative">
          {/* Section Header with PiggyTail Arrow */}
          <div className="relative mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00f2fe]/10 text-[#00f2fe] px-3 py-1 text-xs font-mono mb-2">
                <span>PROJECTS & CONTRIBUTIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Floating Projects & PRs
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Floating cards featuring my CLI tools, bug fixes, and active pull requests across open-source tools.
              </p>
            </div>

            {/* PiggyTail Arrow pointing to floating cards */}
            <PiggyTailArrow
              label="ship it"
              variant="loop-left"
              color="#00f2fe"
              className="hidden md:block text-right"
            />
          </div>

          {/* Floating Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projectsData.map((project: Project, idx: number) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

        </section>

        {/* Terminal Bootstrap Section */}
        <TerminalBootstrap />

        {/* Social Links & GitHub Ecosystem Section */}
        <SocialLinks />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
