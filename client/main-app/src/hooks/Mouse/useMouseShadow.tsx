import { useState, useEffect } from 'react';

const useMouseShadow = () => {
  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (element && element.tagName.toLowerCase() !== 'main' && !element.closest('main')) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMouseShadow = () => {
    setShowShadow(prevShowShadow => !prevShowShadow);
  };

  return { showShadow, toggleMouseShadow };
};

export default useMouseShadow;
