import React, { useRef, useEffect } from 'react';
import video from '../../img/coffee.mp4';

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
      <div className="background">
        <video muted autoPlay playsInline loop className="background__content">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div ref={contentRef} className="content">
        {props.children}
      </div>
    </div>

  );
}