import React, { useRef, useState } from 'react';
import NavContent from './NavContent';

export default function FloatingNav(props) {
  const checkboxRef = useRef(null);
  const [ isNavOpen, setIsNavOpen ] = useState(false);

  function closeNav() {
    checkboxRef.current.checked = false;
    setIsNavOpen(prev => !prev);
  }

  function openNav() {
    checkboxRef.current.checked = true;
    setIsNavOpen(prev => !prev);
  }

  function handleKeyDown(e) {
    if (e.code === 'Enter' || e.code === 'Space') {
      if (isNavOpen) {
        closeNav();
      } else {
        openNav();
      }
    }
  }

  return (
    <div className="float-nav">
      <input ref={checkboxRef} type="checkbox" className="float-nav__checkbox" id="float-nav-toggle" />
      <label 
        tabIndex="1" 
        role="button" 
        htmlFor="float-nav-toggle"
        className="float-nav__button"
        onKeyDown={handleKeyDown}
      >
        <span className="float-nav__icon">&nbsp;</span>
      </label>
      <div className="float-nav__background">&nbsp;</div>
      <div className="float-nav__nav">
        <NavContent {...props} onClickItem={closeNav} />
      </div>
    </div>
  );
}