import React, { useRef } from 'react';
import NavContent from './NavContent';

export default function FloatingNav(props) {
  const checkboxRef = useRef(null);

  function closeNav() {
    checkboxRef.current.checked = false;
  }

  return (
    <div className="float-nav">
      <input ref={checkboxRef} type="checkbox" className="float-nav__checkbox" id="float-nav-toggle" />
      <label htmlFor="float-nav-toggle" className="float-nav__button">
        <span className="float-nav__icon">&nbsp;</span>
      </label>
      <div className="float-nav__background">&nbsp;</div>
      <div className="float-nav__nav">
        <NavContent {...props} onClickItem={closeNav} />
      </div>
    </div>
  );
}