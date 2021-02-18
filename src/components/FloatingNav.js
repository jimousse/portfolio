import React from 'react';
import SideNavList from './SideNavList';

export default function FloatingNav(props) {

  const tabList = [
    { name: 'About', tab: 'one' },
    { name: 'Projects', tab: 'two' },
    { name: 'Resume', tab: 'three' },
    { name: 'Contact', tab: 'four' }
  ];

  return (
    <div>
      Hello
      <input type="checkbox" className="float-nav__checkbox" id="float-nav-toggle" />
      <label for="float-nav-toggle" className="float-nav__button">
        <span class="float-nav__icon">&nbsp;</span>
      </label>
      <div className="float-nav__background">&nbsp;</div>
      <div className="float-nav__nav">
        <SideNavList items={tabList}/>
      </div>
    </div>
  );
}