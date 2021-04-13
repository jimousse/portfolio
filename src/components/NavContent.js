import React from 'react';
import SideNavList from './SideNavList';
import Name from './Name';
import ThemeToggleButton from './ThemeToggleButton';

export default function NavContent(props) {
  const classNames = [ 'nav-content' ];
  if (props.expand) {
    classNames.push('expand');
  }
  return (
    <div className={classNames.join(' ')}>
      <Name />
      <SideNavList {...props} />
      <ThemeToggleButton />
    </div>
  );
}