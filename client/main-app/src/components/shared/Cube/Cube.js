import React from 'react';
import '../../../assets/styles/tailwind.scss'; // Import Cube styles

export const Cube = ({ cubeSize, rotationX, rotationY, offsetX = 0, offsetY = 0, offsetZ = 0, color = 'rgba(255, 255, 255, 0.8)', shadow = false, shadowColor = 'rgba(255, 255, 255, 1)' }) => {
  const cubeStyle = {
    position: 'absolute',
    width: `${cubeSize}px`,
    height: `${cubeSize}px`,
    transformStyle: 'preserve-3d',
    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateX(${offsetX}px) translateY(${offsetY}px) translateZ(${offsetZ}px)`,
    zIndex: cubeSize + offsetZ
  };

  const sideStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: color,
    border: '1px solid black',
    boxSizing: 'border-box'
  };

  const bottomSideStyle = shadow ? {
    ...sideStyle,
    boxShadow: `0px 0px 100px ${shadowColor}` // Add drop shadow to the bottom side with specified color
  } : sideStyle;

  return (
    <div className="cube" style={cubeStyle}>
      <div className="side front" style={{ ...sideStyle, transform: `translateZ(calc(${cubeSize}px / 2))` }}></div>
      <div className="side back" style={{ ...sideStyle, transform: `translateZ(calc(-${cubeSize}px / 2))` }}></div>
      <div className="side top" style={{ ...sideStyle, transform: `rotateX(90deg) translateZ(calc(${cubeSize}px / 2))` }}></div>
      <div className="side bottom" style={{ ...bottomSideStyle, transform: `rotateX(-90deg) translateZ(calc(${cubeSize}px / 2))` }}></div>
      <div className="side left" style={{ ...sideStyle, transform: `rotateY(-90deg) translateZ(calc(${cubeSize}px / 2))` }}></div>
      <div className="side right" style={{ ...sideStyle, transform: `rotateY(90deg) translateZ(calc(${cubeSize}px / 2))` }}></div>
    </div>
  );
};



export const ResizableCube = ({ width, height, ...cubeProps }) => {
  return (
    <Cube cubeSize={Math.min(width, height)} {...cubeProps} />
  );
};