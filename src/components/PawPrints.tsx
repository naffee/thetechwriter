'use client';

import { useEffect, useState } from 'react';

interface PawPrint {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export default function PawPrints() {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setIsHovering(true);
      
      // Add paw print occasionally while moving (not every pixel)
      if (Math.random() > 0.95) {
        addPawPrint(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Add multiple paw prints on click
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const offsetX = (Math.random() - 0.5) * 30;
          const offsetY = (Math.random() - 0.5) * 30;
          addPawPrint(e.clientX + offsetX, e.clientY + offsetY);
        }, i * 100);
      }
    };

    const addPawPrint = (x: number, y: number) => {
      const newPaw: PawPrint = {
        id: Date.now() + Math.random(),
        x,
        y,
        rotation: Math.random() * 360,
      };

      setPawPrints((prev) => [...prev, newPaw]);

      // Remove paw print after animation completes
      setTimeout(() => {
        setPawPrints((prev) => prev.filter((paw) => paw.id !== newPaw.id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pawPrints.map((paw) => (
        <div
          key={paw.id}
          className="absolute animate-paw-fade"
          style={{
            left: `${paw.x}px`,
            top: `${paw.y}px`,
            transform: `translate(-50%, -50%) rotate(${paw.rotation}deg)`,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="currentColor"
            className="text-brand-purple/40 dark:text-brand-purple/50"
          >
            {/* Main pad (bottom) */}
            <ellipse cx="24" cy="34" rx="10" ry="8" />
            
            {/* Top left toe */}
            <ellipse cx="12" cy="20" rx="5" ry="6" />
            
            {/* Top middle-left toe */}
            <ellipse cx="18" cy="14" rx="5" ry="6" />
            
            {/* Top middle-right toe */}
            <ellipse cx="30" cy="14" rx="5" ry="6" />
            
            {/* Top right toe */}
            <ellipse cx="36" cy="20" rx="5" ry="6" />
          </svg>
        </div>
      ))}
    </div>
  );
}
