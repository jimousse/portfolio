import React from 'react';

const BLOCK_NAME = 'skills';
export default function Skills(props) {
  const { items } = props;
  return (
    <div  className={BLOCK_NAME}>
      <ul className={`${BLOCK_NAME}__list`}>
        {items.map(item => {
          return <li className={`${BLOCK_NAME}__item ${item.class}`}><span>{item.label}</span></li>;
        })}
      </ul>
    </div>
  );
}