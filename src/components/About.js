import React from 'react';
import moiImg from '../../img/moi.jpg';

export default function About() {
  return (
    <div className="about">
      <figure className="about__figure">
        <img className="about__picture" src={moiImg} />
        <figcaption className="about__caption">🍻</figcaption>
      </figure>
      <div className="about__text">
        <h2 className="heading-2 about__hi">Hi, I'm <span className="about__name">Jimmy</span>.</h2>
        <p className="about__description">I am a software developer based in 
        <span className="location NL"> Utrecht, Netherlands </span>.
        </p>
        <p className="about__description">
         I come from <span className="location FR">Paris, France</span> where I graduated from Telecom ParisTech. I currently work at ServiceNow, building a highly scalable data visualisation library in JavaScript.
        </p>
        <p className="about__description">
          Outside of work, I enjoy playing video games, jogging, cooking italian food (with lots of cheese) and drinking delicious bitter IPA beers.
        </p>
      </div>
    </div>
  );
}