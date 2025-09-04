'use client';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface ResponsiveBars {
  default: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface GradientBarsProps {
  bars?: number | ResponsiveBars;
  colors?: string[];
  barClassName?: string;
}

export const GradientBars = ({
  bars = 20,
  colors = ['#e60a64', 'transparent'],
  barClassName = '',
}: GradientBarsProps) => {
  const [currentBars, setCurrentBars] = useState<number>(
    typeof bars === 'number' ? bars : bars.default
  );

  useEffect(() => {
    if (typeof bars === 'number') {
      setCurrentBars(bars);
      return;
    }

    const updateBars = () => {
      const width = window.innerWidth;
      if (width >= 1280 && bars.xl) {
        setCurrentBars(bars.xl);
      } else if (width >= 1024 && bars.lg) {
        setCurrentBars(bars.lg);
      } else if (width >= 768 && bars.md) {
        setCurrentBars(bars.md);
      } else {
        setCurrentBars(bars.default);
      }
    };

    updateBars();
    window.addEventListener('resize', updateBars);
    return () => window.removeEventListener('resize', updateBars);
  }, [bars]);

  const barCount = currentBars;
  const gradientStyle = `linear-gradient(to top, ${colors.join(', ')})`;
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full w-full">
        {Array.from({ length: barCount }).map((_, index) => {
          const position = index / (barCount - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);
          return (
            <motion.div
              key={`bg-bar-${index}`}
              className={`flex-1 origin-bottom ${barClassName}`}
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
