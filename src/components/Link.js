import React from 'react';

const Arrow = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 32 32">
      <path d="M7.414 27.414l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-12c0-0.809-0.487-1.538-1.235-1.848-0.248-0.103-0.508-0.151-0.765-0.151v-0.001h-12c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.391 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
    </svg>
  );
};

export default function Link(props) {
  const { href, label, includeArrow, primary } = props;
  const classes = [ 'link' ];
  if (primary) {
    classes.push('link--primary');
  }
  return (
    <a href={href} className={classes.join(' ')}>
      {label}
      {includeArrow && <span className="link__arrow">{<Arrow />}</span>}
    </a>
  );
}