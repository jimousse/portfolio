import React from 'react';
import moiImg from '../../img/moi.jpg';
import Link from './Link';

export default function About() {
  const SERVICENOW_LINK = 'https://developer.servicenow.com/dev.do#!/reference/now-experience/quebec/components';
  const LINK_LABEL = 'Now Design Sytem';
  return (
    <div className="about">
      <figure className="about__figure">
        <img className="about__picture" src={moiImg} />
        <figcaption className="about__caption">🍻</figcaption>
      </figure>
      <div className="about__text">
        <h2 className="heading-2 about__hi">Hi, I'm Jimmy.</h2>
        <p className="about__description">I am a frontend developer based in 
        <span className="location NL"> Utrecht, Netherlands </span>.
         Currently working on the Now Design Sytem
        at ServiceNow, my main focus is on building a highly scalable data visualization library used through the whole product.
        </p>
      </div>
    </div>
  );
}