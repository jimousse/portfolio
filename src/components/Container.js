import React from 'react';
import NavSideBar from './NavSideBar';
import FloatingNav from './FloatingNav';

export default function Container() {
  return (
    <div className="container">
      <NavSideBar />
      <FloatingNav></FloatingNav>
    </div>
  );
}