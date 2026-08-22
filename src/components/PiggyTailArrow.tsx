import React from 'react';

interface PiggyTailArrowProps {
  label: string;
  variant?: 'loop-right' | 'loop-down' | 'curly-pointer' | 'loop-left';
  className?: string;
  color?: string;
}

export const PiggyTailArrow: React.FC<PiggyTailArrowProps> = ({
  label,
  variant = 'loop-right',
  className = '',
  color = '#00f2fe'
}) => {
  return (
    <div className={`inline-flex flex-col items-center select-none pointer-events-none z-10 ${className}`}>
      <span
        className="font-handwriting text-lg md:text-xl font-bold tracking-wide transform -rotate-2 whitespace-nowrap mb-1"
        style={{ color }}
      >
        {label}
      </span>

      {variant === 'loop-right' && (
        <svg width="84" height="48" viewBox="0 0 84 48" fill="none" className="overflow-visible">
          <path
            d="M 10 10 C 25 5, 45 2, 40 20 C 35 38, 15 25, 30 15 C 45 5, 70 25, 76 36"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M 68 36 L 78 38 L 74 28"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      )}

      {variant === 'loop-down' && (
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none" className="overflow-visible">
          <path
            d="M 20 5 C 40 5, 55 15, 45 32 C 35 48, 10 30, 25 22 C 40 14, 45 45, 40 63"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 31 54 L 40 63 L 49 54"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}

      {variant === 'curly-pointer' && (
        <svg width="90" height="50" viewBox="0 0 90 50" fill="none" className="overflow-visible">
          <path
            d="M 5 35 C 20 40, 35 42, 30 25 C 25 8, 10 20, 25 30 C 40 40, 65 30, 82 14"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M 72 12 L 84 12 L 82 24"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      )}

      {variant === 'loop-left' && (
        <svg width="84" height="48" viewBox="0 0 84 48" fill="none" className="overflow-visible">
          <path
            d="M 74 10 C 59 5, 39 2, 44 20 C 49 38, 69 25, 54 15 C 39 5, 14 25, 8 36"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M 16 36 L 6 38 L 10 28"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
};
