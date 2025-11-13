'use client';
import React, { useRef, useEffect, useState } from 'react';

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 16,
  gap = 32,
  className = '',
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const dynamicOpacity = isHovering ? 0.15 : 0.1;
  const dynamicTransform = isHovering
    ? `translate(${(mousePosition.x - 50) * 0.01}px, ${(mousePosition.y - 50) * 0.01}px)`
    : 'translate(0, 0)';

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative transition-all duration-300 ease-out ${className}`}
      style={{
        backgroundImage: 'url(/icons/backgroundIcon.svg)',
        backgroundSize: `${dotSize + gap}px ${dotSize + gap}px`,
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0',
        opacity: dynamicOpacity,
        transform: dynamicTransform,
        ...style
      }}
    ></div>
  );
};

export default DotGrid;