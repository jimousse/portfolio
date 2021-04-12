import React, { useRef } from 'react';
import SideNavList from './SideNavList';
import svg from '../../docs/cup.svg';

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
      <div>
        <img className="float-nav__logo" src={svg} alt="Cup of coffee" />
        <SideNavList {...props} onClickItem={closeNav}/>
      </div>
      </div>
    </div>
  );
}