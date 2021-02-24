import React from 'react';

export default function Link(props) {
  const { href, label, includeArrow } = props;
  return (
    <a href={href} className="link">
      {label}
      {includeArrow && <span className="link__arrow">↗</span>}
    </a>
  );
}