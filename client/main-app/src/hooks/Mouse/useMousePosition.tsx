import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
      const hovered = document.elementFromPoint(event.clientX, event.clientY);
      if (hovered) setHoveredElement(hovered as HTMLElement);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { mousePosition, hoveredElement };
};

export default useMousePosition;