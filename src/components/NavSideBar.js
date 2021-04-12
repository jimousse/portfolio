import React from 'react';
import NavContent from './NavContent';

export default function NavSideBar(props) {
  return (
    <nav className="sidebar">
      <NavContent {...props} expand />
    </nav>
  );
}