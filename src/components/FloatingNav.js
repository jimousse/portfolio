import React from 'react';
import SideNavList from './SideNavList';

export default function FloatingNav(props) {
  return (
    <div>
      <input type="checkbox" className="float-nav__checkbox" id="float-nav-toggle" />
      <label htmlFor="float-nav-toggle" className="float-nav__button">
        <span className="float-nav__icon">&nbsp;</span>
      </label>
      <div className="float-nav__background">&nbsp;</div>
      <div className="float-nav__nav">
        <SideNavList {...props}/>
      </div>
    </div>
  );
}