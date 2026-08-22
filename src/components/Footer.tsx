import React from 'react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0c12] py-12 px-4 lg:px-8 mt-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#00f2fe] text-black font-bold flex items-center justify-center">
            M
          </div>
          <div>
            <span className="text-white font-bold">Lev (Mopsgamer)</span> — Built with Bun & React
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Mopsgamer/Mopsgamer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f2fe] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4 text-slate-300" />
            <span>Mopsgamer/Mopsgamer Repo</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://bun.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f59e0b] transition-colors"
          >
            Powered by Bun 1.4+
          </a>
        </div>

        <div className="text-slate-500 text-[11px]">
          Hosted on GitHub Pages
        </div>

      </div>
    </footer>
  );
};
