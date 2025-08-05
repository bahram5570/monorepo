import React, { useEffect, useRef } from 'react';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { LoopSliderProps } from './type';

export default function LoopSlider({ items, direction = 'left' }: LoopSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { colors } = useTheme();
  const animationClass = direction === 'right' ? 'animate-scrollRight' : 'animate-scrollLeft';

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleAnimation = () => {
      track.appendChild(track.children[0]);
      track.classList.remove(animationClass);
      void track.offsetWidth;
      track.classList.add(animationClass);
    };

    track.addEventListener('animationiteration', handleAnimation);
    return () => track.removeEventListener('animationiteration', handleAnimation);
  }, []);

  return (
    <>
      <div className="overflow-hidden max-w-[480px] mx-auto">
        <div ref={trackRef} className={`flex  ${animationClass}`} style={{ width: 'max-content' }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center min-w-[200px] mx-1 px-4 py-3 rounded-lg text-center  whitespace-nowrap"
              style={{ boxShadow: '0px 4px 15px rgba(58, 112, 191, 0.1)', backgroundColor: colors.White }}
            >
              <Typography scale="Body" size="Medium" textAlign="center">
                {item.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
