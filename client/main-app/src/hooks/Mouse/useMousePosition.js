import { useState, useEffect } from 'react';

// const useMousePosition = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', updateMousePosition);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//     };
//   }, []);

//   return position;
// };

// export default useMousePosition;

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