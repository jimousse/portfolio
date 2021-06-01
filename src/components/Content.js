import React, { useRef, useEffect } from 'react';

export default function Content(props) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // reset scrolling when changing tab
      contentRef.current.scrollTo(0, 0);
    }
  });

  return (
    <div ref={contentRef} className="content">
      {props.children}
    </div>
  );
}