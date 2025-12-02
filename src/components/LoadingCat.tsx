'use client';

import React from 'react';

interface LoadingCatProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export default function LoadingCat({ size = 'md', message }: LoadingCatProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Cat Body */}
          <ellipse cx="60" cy="60" rx="30" ry="25" fill="#0D0D0D" />
          <ellipse cx="60" cy="60" rx="30" ry="25" fill="#8B5CF6" opacity="0.15" />
          
          {/* Cat Head */}
          <circle cx="60" cy="35" r="22" fill="#0D0D0D" />
          <circle cx="60" cy="35" r="22" fill="#8B5CF6" opacity="0.2" />
          
          {/* Left Ear */}
          <ellipse cx="48" cy="20" rx="8" ry="12" fill="#0D0D0D" />
          <ellipse cx="48" cy="22" rx="5" ry="8" fill="#8B5CF6" opacity="0.3" />
          
          {/* Right Ear */}
          <ellipse cx="72" cy="20" rx="8" ry="12" fill="#0D0D0D" />
          <ellipse cx="72" cy="22" rx="5" ry="8" fill="#8B5CF6" opacity="0.3" />
          
          {/* Focused eyes (concentrated on typing) */}
          <ellipse cx="52" cy="33" rx="3" ry="4" fill="#8B5CF6" />
          <ellipse cx="68" cy="33" rx="3" ry="4" fill="#8B5CF6" />
          
          {/* Nose */}
          <circle cx="60" cy="38" r="2" fill="#8B5CF6" />
          
          {/* Concentrated smile */}
          <path d="M60 40 Q56 42 54 41" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M60 40 Q64 42 66 41" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Laptop/Keyboard */}
          <rect x="35" y="70" width="50" height="20" rx="2" fill="#8B5CF6" opacity="0.3" className="animate-pulse" />
          <rect x="38" y="73" width="44" height="14" rx="1" fill="#0D0D0D" opacity="0.2" />
          
          {/* Typing paws - animated */}
          <g className="animate-typing-left">
            <ellipse cx="45" cy="75" rx="4" ry="3" fill="#0D0D0D" />
          </g>
          <g className="animate-typing-right">
            <ellipse cx="75" cy="75" rx="4" ry="3" fill="#0D0D0D" />
          </g>
          
          {/* Code symbols floating up */}
          <text x="20" y="50" fill="#8B5CF6" fontSize="8" opacity="0.6" className="animate-code-float-1">
            &lt;/&gt;
          </text>
          <text x="95" y="45" fill="#8B5CF6" fontSize="8" opacity="0.6" className="animate-code-float-2">
            { }
          </text>
          <text x="15" y="30" fill="#8B5CF6" fontSize="8" opacity="0.6" className="animate-code-float-3">
            ( )
          </text>
        </svg>
      </div>
      
      {message && (
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium animate-pulse">
          {message}
        </p>
      )}
      
      {/* Loading dots */}
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
