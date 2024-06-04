import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
      const hovered = document.elementFromPoint(event.clientX, event.clientY);
      setHoveredElement(hovered);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { mousePosition, hoveredElement };
};

export default useMousePosition;