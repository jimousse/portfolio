import React from 'react';

export default function SideNavList(props) {
  const { pages, onChangePage, onClickItem } = props;
  return (
    <ul className="side-nav">
      {pages.map((item, i) => {
        const linkClassNames = [ 'side-nav__link' ];
        if (props.currentPage === item.name) linkClassNames.push('active');
        return (
          <li key={i} className="side-nav__item">
            <a 
              className={linkClassNames.join(' ')}
              tabIndex="2"
              href={`#${item.id}`}
              onClick={() => {
                onChangePage(item.name);
                if (onClickItem) onClickItem();
              }}
            >
              <span className={`side-nav__item-name tab-${item.name}`}>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}