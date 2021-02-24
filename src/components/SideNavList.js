import React from 'react';

export default function SideNavList(props) {
  const { items, onChangeTabs, onClickItem } = props;
  return (
    <ul className="side-nav">
      {items.map((item, i) => {
        const btnClassNames = [ 'side-nav__button' ];
        if (props.activeTab === item.name) btnClassNames.push('active');
        return (
          <li key={i} className="side-nav__item">
            <button 
              className={btnClassNames.join(' ')}
              onClick={() => {
                onChangeTabs(item.name);
                if (onClickItem) onClickItem();
              }}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}