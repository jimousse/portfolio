import React from 'react';

export default function Link(props) {
  const { href, label } = props;
  return (
    <a href={href} className="link">
      {label}
      <span className="link__arrow">↗</span>
    </a>
  );
}