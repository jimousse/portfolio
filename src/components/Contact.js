import React, { forwardRef } from 'react';
import Link from './Link';
import { contactData } from '../data/contact';
import SectionTitle from './SectionTitle';

const Contacts = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id} className="section">
      <SectionTitle title={props.label} />
      <div  className="contact">
        <h2 className="heading-2 contact__hi">Drop me a line!</h2>
        {contactData.map((item, i) => {
          const { link, label, site } = item;
          return (
            <div key={i} className={`contact__item contact__item--${site}`}>
              {link ? <Link label={label} includeArrow href={link} /> : label}
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Contacts;