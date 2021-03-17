import React from 'react';
import SideNavList from './SideNavList';
import Name from './Name';
import Legal from './Legal';

export default function NavSideBar(props) {
  return (
    <nav className="sidebar">
      <Name />
      <SideNavList {...props} />
      <Legal />
    </nav>
  );
}