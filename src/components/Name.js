import React from 'react';
import svg from '../../docs/cup.svg';

export default function Name() {
  return (
    <div className="name">
      <h1 className="heading-1 name__name">Jimmy Castex</h1>
      <span className="name__job">Software developer</span>
      <img className="name__logo" src={svg} alt="cup of coffee" />
    </div>
  );
}