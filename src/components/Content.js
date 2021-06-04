import React, { useRef, useEffect } from 'react';
import SvgBackground from './SvgBackground';

export default function Content(props) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // reset scrolling when changing tab
      contentRef.current.scrollTo(0, 0);
    }
  });

  return (
    <div className="parentContent">
      <SvgBackground /> 
      <div ref={contentRef} className="content">
        {props.children}
      </div>
    </div>
  );
}