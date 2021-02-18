import React from 'react';

export default function SideNavList(props) {
  const { items } = props;
  return (
    <ul className="side-nav">
      {items.map(item => {
        return (
          <li className="side-nav__item">
            <button className="side-nav__button">{item.name}</button>
          </li>
        );
      })}
    </ul>
  );
}