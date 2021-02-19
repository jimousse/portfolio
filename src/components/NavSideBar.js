import React from 'react';
import SideNavList from './SideNavList';
import Logo from './Logo';

export default function NavSideBar(props) {
  return (
    <nav className="sidebar">
      <Logo />
      <SideNavList {...props} />
    </nav>
  );
}