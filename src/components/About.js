import React from 'react';
import moiImg from '../../img/moi.jpg';

export default function About() {
  const SERVICENOW_LINK = 'https://developer.servicenow.com/dev.do#!/reference/now-experience/quebec/components';
  return (
    <div className="about">
      <figure className="about__figure">
        <img className="about__picture" src={moiImg} />
        <figcaption className="about__caption">🍻</figcaption>
      </figure>
      <div className="about__text">
        <h2 className="heading-2">Hi, I'm Jimmy.</h2>
        <p className="about__description">I am a frontend developer working on 
        the <a className="about__job-link" href={SERVICENOW_LINK}>Now Design System <span className="about__job-link-arrow">↗</span></a> at 
        ServiceNow. My main focus is on building a highly scalable data visualization library used through the whole product.
        </p>
        {/* 
          TODOOOOOO: I should probably make a component out of the link.
        */}
      </div>
    </div>
  );
}