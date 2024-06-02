import { useEffect, useState } from 'react';

export const MouseShadow = ({ mousePosition }) => {
    return (
      <div className='mouse-shadow'
        style={{
          position: 'absolute',
          top: mousePosition.y - 150,
          left: mousePosition.x + window.scrollX,
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.3141592653)',
          borderRadius: '50%',
          filter: 'blur(75px)',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />
    );
};

export function useHoveredElementId() {
  const [hoveredElementId, setHoveredElementId] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      setHoveredElementId(hoveredElement ? hoveredElement.id : null);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return hoveredElementId;
}

export * as Mouse from './mouse.js';