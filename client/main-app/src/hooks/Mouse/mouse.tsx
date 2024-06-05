import React from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const MouseShadow = ({ mousePosition }: {mousePosition: MousePosition}) => {
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

// export function useHoveredElementId() {
//   const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);;

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
//       if (hoveredElement && hoveredElementId !== null) {
//         if (hoveredElementId.id) setHoveredElementId(hoveredElementId.id);
//       }
//       // setHoveredElementId(hoveredElement ? hoveredElement.id : null);
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return hoveredElementId;
// }

export default MouseShadow;