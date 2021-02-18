import React from 'react';
import SideNavList from './SideNavList';
import Name from './Name';

const tabList = [
  { name: 'About', tab: 'one' },
  { name: 'Projects', tab: 'two' },
  { name: 'Resume', tab: 'three' },
  { name: 'Contact', tab: 'four' }
];

export default function NavSideBar() {
  return (
    <nav className="sidebar">
      <Name />
      <SideNavList items={tabList} />
    </nav>
  );
}