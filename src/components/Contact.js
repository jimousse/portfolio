import React from 'react';
import Link from './Link';
import { contactData } from '../data/contact';

const BLOCK_NAME = 'contact';

export default function Contacts() {
  return (
    <div className={BLOCK_NAME}>
      {contactData.map((item, i) => {
        const { link, label, site } = item;
        return (
          <div key={i} className={`${BLOCK_NAME}__item ${BLOCK_NAME}__item--${site}`}>
            {link ? <Link label={label} href={link} /> : label}
          </div>
        );
      })}
    </div>
  );
}