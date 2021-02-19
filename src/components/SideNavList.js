import React from 'react';

export default function SideNavList(props) {
  const { items, onChangeTabs } = props;
  return (
    <ul className="side-nav">
      {items.map(item => {
        const btnClassNames = [ 'side-nav__button' ];
        if (props.activeTab === item.name) btnClassNames.push('active');
        return (
          <li className="side-nav__item">
            <button 
              className={btnClassNames.join(' ')}
              onClick={() => onChangeTabs(item.name)}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}