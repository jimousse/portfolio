import React from 'react';
import svg from '../../docs/cup.svg';
import Logo from './Logo';

export default function Name() {
  return (
    <div className="name">
      <h1 className="heading-1 name__name">Jimmy Castex</h1>
      <span className="name__job">Software developer</span>
      <Logo />
    </div>
  );
}