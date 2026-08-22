import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { profileData } from '../data/portfolio';
import { GithubIcon } from './GithubIcon';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0c0d12]/90 backdrop-blur-md px-4 lg:px-8 py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand Title */}
        <a
          href="#"
          className="flex items-center gap-3 group px-3 py-1.5"
        >
          <div className="flex flex-col">
            <span className="font-mono font-bold text-white tracking-wider text-sm flex items-center gap-1">
              Mopsgamer<span>/</span>mops0234<span>/</span><span className="text-[#00f2fe] text-sm">Lev</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              don't be scared
            </span>
          </div>
        </a>

        {/* Live Status Badge */}
        {profileData.status &&
          <div className="hidden md:flex items-center gap-2 bg-[#12141c] px-3 py-1.5 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">{profileData.status}</span>
          </div>
        }

        {/* Quick Social Action Bar */}
        <div className="flex items-center gap-2">
          <a
            href={profileData.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#181a24] hover:bg-[#202432] text-xs font-mono text-slate-200 transition-all dx-button-shadow"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#00f2fe]" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://discord.gg/ASQq9VkB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5865F2] hover:bg-[#4752C4] text-xs font-mono text-white transition-all dx-button-shadow"
            title="Discord Friend Request"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Discord</span>
          </a>

          <a
            href="https://t.me/mops0234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#229ED9] hover:bg-[#1C82B3] text-xs font-mono text-white transition-all dx-button-shadow"
            title="Telegram mops0234"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
        </div>

      </div>
    </header>
  );
};
