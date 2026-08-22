import React from 'react';
import { Copy, Check, TerminalSquare, Cpu } from 'lucide-react';
import { linuxBootstrapScript } from '../data/portfolio';
import { PiggyTailArrow } from './PiggyTailArrow';

export const TerminalBootstrap: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(linuxBootstrapScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="bootstrap" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header with PiggyTail Arrow */}
      <div className="relative mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] px-3 py-1 text-xs font-mono mb-2">
            <span>DOTFILES & ENVIRONMENT</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Linux & Fish Shell Bootstrap
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            My automated Linux setup featuring Fish shell, Zoxide, Ripgrep, Bun, Deno, and NVM.
          </p>
        </div>

        {/* PiggyTail Arrow pointing to Copy Terminal button */}
        <PiggyTailArrow
          label="quick copy my setup"
          variant="loop-right"
          color="#10b981"
          className="hidden md:block"
        />
      </div>

      {/* Terminal Container */}
      <div className="bg-[#0e1017] dx-card-shadow overflow-hidden relative">

        {/* Terminal Header Bar */}
        <div className="bg-[#161824] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Terminal Window Controls (Sharp rectangular dots) */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-[#ef4444]"></span>
              <span className="w-3 h-3 bg-[#f59e0b]"></span>
              <span className="w-3 h-3 bg-[#10b981]"></span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 ml-2 bg-[#0e1017] px-3 py-1">
              <TerminalSquare className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span>bootstrap.sh — bash</span>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-bold transition-all dx-button-shadow ${
              copied
                ? 'bg-[#99ffdc] text-black'
                : 'bg-[#10b981] text-black hover:bg-[#14d996]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY COMMANDS</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed bg-[#0a0b10] text-slate-200">
          <pre className="text-xs md:text-sm text-slate-300">
            <code>{linuxBootstrapScript}</code>
          </pre>
        </div>

        {/* Terminal Footer Bar */}
        <div className="bg-[#12141f] px-4 py-2 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Target OS: Ubuntu / Debian Linux</span>
          <span className="text-[#00f2fe]">Shell: Fish / Bash</span>
        </div>

      </div>
    </section>
  );
};
