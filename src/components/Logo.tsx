import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
}

export default function Logo({ className = '', size = 'md', light = false }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-14 h-14 text-2xl',
    xl: 'w-20 h-20 text-4xl',
  };

  const bgStyle = light
    ? 'bg-white text-neutral-950 border border-neutral-100'
    : 'bg-neutral-950 text-white';

  const textLabelColor = light ? 'text-white' : 'text-neutral-950';
  const sublabelColor = light ? 'text-neutral-400' : 'text-neutral-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bold S Monogram */}
      <div className={`font-display font-black flex items-center justify-center select-none rounded-md transition-all duration-300 hover:scale-105 shadow-sm shrink-0
        ${bgStyle}
        ${sizeClasses[size]}
      `}>
        S
      </div>

      {/* Text Label next to logo */}
      <div className="flex flex-col select-none">
        <span className={`font-display font-black tracking-wider leading-none ${size === 'sm' ? 'text-sm' : 'text-base md:text-lg'} ${textLabelColor}`}>
          SJM <span className="font-light">JOINERY</span>
        </span>
        <span className={`font-mono text-[9px] uppercase tracking-[0.25em] mt-1 ${sublabelColor}`}>
          Bespoke Craftsmanship
        </span>
      </div>
    </div>
  );
}
