import React from 'react';
import { GitPullRequest, Code, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getFloatClass = (speed: string) => {
    switch (speed) {
      case 'fast':
        return 'animate-float-fast';
      case 'medium':
        return 'animate-float-medium';
      case 'slow':
      default:
        return 'animate-float-slow';
    }
  };

  return (
    <div
      className={`relative group bg-[#11131c] p-6 dx-card-shadow dx-card-hover flex flex-col justify-between ${getFloatClass(
        project.floatSpeed
      )}`}
      style={{
        animationDelay: project.animationDelay,
      }}
    >
      {/* Top Accent Color Bar */}
      <div 
        className="absolute top-0 left-0 w-full h-1" 
        style={{ backgroundColor: project.accentColor }} 
      />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          
          {/* Status Label Badge */}
          <div 
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider uppercase"
            style={{ 
              backgroundColor: `${project.accentColor}18`, 
              color: project.accentColor 
            }}
          >
            {project.type === 'pr' ? (
              <GitPullRequest className="w-3.5 h-3.5" />
            ) : (
              <Code className="w-3.5 h-3.5" />
            )}
            <span>{project.statusLabel}</span>
          </div>

          {/* Repo indicator */}
          <span className="text-[10px] font-mono text-slate-400">
            #{index + 1}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-mono font-bold text-white group-hover:text-[#00f2fe] transition-colors mb-2 flex items-center justify-between">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline flex items-center gap-2"
          >
            <span>{project.title}</span>
          </a>
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Tag Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 bg-[#1a1d2b] text-slate-300 text-[11px] font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Card Action Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-[#181c2a] hover:bg-[#22283c] text-xs font-mono font-bold text-slate-200 group-hover:text-[#00f2fe] transition-all flex items-center justify-between dx-button-shadow"
        >
          <span>VIEW ON GITHUB</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
