'use client';

import React, { useState, useEffect } from 'react';

interface CatMascotProps {
  variant?: 'peeking' | 'sitting' | 'paw';
  className?: string;
}

export default function CatMascot({ variant = 'sitting', className = '' }: CatMascotProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isYawning, setIsYawning] = useState(false);
  const [tailFlick, setTailFlick] = useState(false);

  useEffect(() => {
    // Random blinking every 3-5 seconds
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 2000 + 3000);

    // Occasional yawn every 10-15 seconds
    const yawnInterval = setInterval(() => {
      setIsYawning(true);
      setTimeout(() => setIsYawning(false), 1500);
    }, Math.random() * 5000 + 10000);

    // Tail flick every 4-6 seconds
    const tailInterval = setInterval(() => {
      setTailFlick(true);
      setTimeout(() => setTailFlick(false), 600);
    }, Math.random() * 2000 + 4000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(yawnInterval);
      clearInterval(tailInterval);
    };
  }, []);
  const renderCat = () => {
    switch (variant) {
      case 'peeking':
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Body */}
            <ellipse cx="50" cy="65" rx="26" ry="28" fill="#0D0D0D" />
            <ellipse cx="50" cy="65" rx="26" ry="28" fill="#8B5CF6" opacity="0.15" />
            
            {/* Head */}
            <circle cx="50" cy="38" r="30" fill="#0D0D0D" />
            <circle cx="50" cy="38" r="30" fill="#8B5CF6" opacity="0.2" />
            
            {/* Left Ear - Rounded */}
            <ellipse cx="30" cy="18" rx="10" ry="14" fill="#0D0D0D" />
            <ellipse cx="30" cy="20" rx="6" ry="9" fill="#8B5CF6" opacity="0.3" />
            
            {/* Right Ear - Rounded */}
            <ellipse cx="70" cy="18" rx="10" ry="14" fill="#0D0D0D" />
            <ellipse cx="70" cy="20" rx="6" ry="9" fill="#8B5CF6" opacity="0.3" />
            
            {/* Cute sleepy eyes - with blink animation */}
            {isBlinking ? (
              // Closed eyes when blinking
              <>
                <line x1="38" y1="36" x2="46" y2="36" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="54" y1="36" x2="62" y2="36" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
              </>
            ) : isYawning ? (
              // Wide open eyes when yawning
              <>
                <ellipse cx="42" cy="36" rx="4" ry="6" fill="#8B5CF6" />
                <ellipse cx="58" cy="36" rx="4" ry="6" fill="#8B5CF6" />
                <circle cx="43" cy="34" r="1.5" fill="white" opacity="0.8" />
                <circle cx="59" cy="34" r="1.5" fill="white" opacity="0.8" />
              </>
            ) : (
              // Normal sleepy eyes
              <>
                <path d="M38 36 Q42 33 46 36" stroke="#8B5CF6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M54 36 Q58 33 62 36" stroke="#8B5CF6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </>
            )}
            
            {/* Tiny sparkles near eyes for cute effect */}
            <circle cx="36" cy="34" r="1" fill="#8B5CF6" opacity="0.7" />
            <circle cx="64" cy="34" r="1" fill="#8B5CF6" opacity="0.7" />
            
            {/* Cute button nose */}
            <circle cx="50" cy="44" r="3" fill="#8B5CF6" />
            <ellipse cx="50" cy="45" rx="3" ry="2" fill="#8B5CF6" opacity="0.5" />
            
            {/* Sweet smile / Yawn */}
            {isYawning ? (
              // Wide open mouth when yawning
              <>
                <ellipse cx="50" cy="50" rx="8" ry="10" fill="#8B5CF6" opacity="0.3" />
                <ellipse cx="50" cy="50" rx="6" ry="8" fill="#0D0D0D" opacity="0.5" />
              </>
            ) : (
              // Normal smile
              <>
                <path d="M50 46 Q44 50 40 48" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M50 46 Q56 50 60 48" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round" />
              </>
            )}
            
            {/* Rosy cheeks */}
            <ellipse cx="32" cy="42" rx="4" ry="3" fill="#8B5CF6" opacity="0.2" />
            <ellipse cx="68" cy="42" rx="4" ry="3" fill="#8B5CF6" opacity="0.2" />
            
            {/* Front paws */}
            <ellipse cx="38" cy="86" rx="7" ry="5" fill="#0D0D0D" />
            <ellipse cx="62" cy="86" rx="7" ry="5" fill="#0D0D0D" />
            
            {/* Paw details */}
            <circle cx="36" cy="86" r="1.5" fill="#8B5CF6" opacity="0.3" />
            <circle cx="40" cy="86" r="1.5" fill="#8B5CF6" opacity="0.3" />
            <circle cx="60" cy="86" r="1.5" fill="#8B5CF6" opacity="0.3" />
            <circle cx="64" cy="86" r="1.5" fill="#8B5CF6" opacity="0.3" />
            
            {/* Soft whiskers */}
            <line x1="20" y1="40" x2="30" y2="39" stroke="#0D0D0D" strokeWidth="1" opacity="0.4" />
            <line x1="20" y1="45" x2="30" y2="44" stroke="#0D0D0D" strokeWidth="1" opacity="0.4" />
            <line x1="80" y1="40" x2="70" y2="39" stroke="#0D0D0D" strokeWidth="1" opacity="0.4" />
            <line x1="80" y1="45" x2="70" y2="44" stroke="#0D0D0D" strokeWidth="1" opacity="0.4" />
            
            {/* Curled tail - with flick animation */}
            <path
              d="M73 68 Q88 63 90 52 Q92 44 88 40"
              stroke="#0D0D0D"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
              className={tailFlick ? 'animate-tail-flick' : ''}
              style={{
                transformOrigin: '73px 68px',
              }}
            />
          </svg>
        );
      
      case 'paw':
        return (
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Main Pad */}
            <ellipse cx="30" cy="40" rx="12" ry="10" fill="#0D0D0D" opacity="0.2" />
            {/* Toe Pads */}
            <ellipse cx="20" cy="25" rx="5" ry="6" fill="#0D0D0D" opacity="0.2" />
            <ellipse cx="30" cy="22" rx="5" ry="6" fill="#0D0D0D" opacity="0.2" />
            <ellipse cx="40" cy="25" rx="5" ry="6" fill="#0D0D0D" opacity="0.2" />
          </svg>
        );
      
      default: // sitting
        return (
          <svg
            viewBox="0 0 120 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Left Ear */}
            <path
              d="M30 25 L40 5 L50 25 Z"
              fill="#0D0D0D"
            />
            {/* Right Ear */}
            <path
              d="M70 25 L80 5 L90 25 Z"
              fill="#0D0D0D"
            />
            {/* Head */}
            <ellipse cx="60" cy="45" rx="35" ry="32" fill="#0D0D0D" />
            {/* Purple tint */}
            <ellipse cx="60" cy="45" rx="35" ry="32" fill="#8B5CF6" opacity="0.2" />
            {/* Eyes */}
            <ellipse cx="48" cy="42" rx="5" ry="7" fill="#8B5CF6" />
            <ellipse cx="72" cy="42" rx="5" ry="7" fill="#8B5CF6" />
            {/* White eye gleam */}
            <ellipse cx="50" cy="40" rx="2" ry="2" fill="white" />
            <ellipse cx="74" cy="40" rx="2" ry="2" fill="white" />
            {/* Nose */}
            <path d="M60 50 L57 54 L63 54 Z" fill="#8B5CF6" />
            {/* Mouth */}
            <path d="M60 54 Q55 58 52 56 M60 54 Q65 58 68 56" stroke="#0D0D0D" strokeWidth="2" fill="none" />
            {/* Body */}
            <ellipse cx="60" cy="95" rx="28" ry="35" fill="#0D0D0D" />
            <ellipse cx="60" cy="95" rx="28" ry="35" fill="#8B5CF6" opacity="0.15" />
            {/* Tail */}
            <path
              d="M88 85 Q110 75 115 60 Q118 50 112 45"
              stroke="#0D0D0D"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Paws */}
            <ellipse cx="45" cy="125" rx="8" ry="6" fill="#0D0D0D" />
            <ellipse cx="75" cy="125" rx="8" ry="6" fill="#0D0D0D" />
            {/* Whiskers */}
            <line x1="25" y1="45" x2="40" y2="43" stroke="#0D0D0D" strokeWidth="1.5" />
            <line x1="25" y1="52" x2="40" y2="50" stroke="#0D0D0D" strokeWidth="1.5" />
            <line x1="95" y1="45" x2="80" y2="43" stroke="#0D0D0D" strokeWidth="1.5" />
            <line x1="95" y1="52" x2="80" y2="50" stroke="#0D0D0D" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return renderCat();
}
