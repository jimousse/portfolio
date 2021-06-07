import React from 'react';

export default function SvgBackground() {

  const patternSemiSize = 130;
  const emojiHeight = 37;
  const emojiWidth = 34.4;
  const one = {
    x: (patternSemiSize - emojiWidth) / 2,
    y: (patternSemiSize - emojiHeight) / 2 + emojiHeight 
  };
  const two = {
    x: (patternSemiSize - emojiWidth) / 2 + patternSemiSize,
    y: (patternSemiSize - emojiHeight) / 2 + emojiHeight
  };
  const three = {
    x: (patternSemiSize - emojiWidth) / 2,
    y: (patternSemiSize - emojiHeight) / 2 + emojiHeight + patternSemiSize
  };
  const four = {
    x: (patternSemiSize - emojiWidth) / 2 + patternSemiSize,
    y: (patternSemiSize - emojiHeight) / 2 + emojiHeight + patternSemiSize
  };

  const loopRotationTransform = (angle, x, y) => {
    return <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            values={`-${angle} ${x} ${y}; ${angle} ${x} ${y}; -${angle} ${x} ${y}`}
            dur="3s" 
            repeatCount="indefinite" />;
  };

  const fullRotationTransform = (angle, x, y) => {
    return <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            values={`${angle} ${x} ${y}; ${angle + 360} ${x} ${y};`}
            dur="5s" 
            repeatCount="indefinite" />;
  };

  const scaleTransform = (x, y) => {
    return <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            values={`${angle} ${x} ${y}; ${angle + 360} ${x} ${y};`}
            dur="5s" 
            repeatCount="indefinite" />;
  };



  return (
    <svg className="svg-background" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="emoji-pattern" x="-20" y="0" patternUnits="userSpaceOnUse" width={patternSemiSize*2} height={patternSemiSize*2}>
        <text id="one" className="emoji" {...one}>🍺</text>
        <text id="two" className="emoji" {...two} >🍕</text>
        <text id="three" className="emoji" {...three} >🍔</text>
        <text id="four" className="emoji" {...four}>🍩</text>
      </pattern>
    </defs>
      <rect width="100%" height="100%" fill="url(#emoji-pattern)" />
    </svg>
  );
}