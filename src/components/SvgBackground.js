import React from 'react';

export default function SvgBackground() {
  const squareSize = 100;
  const halfSquareSize = squareSize/2;
  const colors = [
    'hsl(29, 97%, 76%)',
    'hsl(4, 82%, 67%)',
    'hsl(58, 89%, 83%)',
    'hsl(183, 100%, 36%)'
  ];
  return (
    <svg className="svg-background" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern 
            id="cool-pattern" 
            width={squareSize} 
            height={squareSize}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(20)"
            viewBox={`0,0,${squareSize},${squareSize}`}
        >
            <polygon 
              points={`0 0, ${halfSquareSize} ${halfSquareSize}, ${squareSize} 0`} 
              fill={colors[0]}
            />
            <polygon 
              points={`${squareSize} 0, ${halfSquareSize} ${halfSquareSize}, ${squareSize} ${squareSize}`} 
              fill={colors[1]}
            />
            <polygon 
              points={`${squareSize} ${squareSize}, ${halfSquareSize} ${halfSquareSize},0 ${squareSize}`} 
              fill={colors[2]}
            />
            <polygon 
              points={`0 ${squareSize}, ${halfSquareSize} ${halfSquareSize}, 0 0`} 
              fill={colors[3]}
            />
        </pattern>
    </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#cool-pattern)" />
    </svg>
  );
}