import React, { forwardRef } from "react";
import SectionTitle from "./SectionTitle";

const About = forwardRef((props, ref) => {
  const moiSrcImg =
    "https://raw.githubusercontent.com/jimousse/portfolio/main/img/moi.jpg";
  return (
    <section ref={ref} id={props.id} className="section">
      <SectionTitle title={props.label} />
      <div className="about">
        <figure className="about__figure">
          <img
            className="about__picture"
            src={moiSrcImg}
            alt="portrait picture"
          />
          <figcaption className="about__caption">👋</figcaption>
        </figure>
        <div className="about__text">
          <h2 className="heading-2 about__hi">
            Hi, I'm <span className="about__name">Jimmy</span>.
          </h2>
          <p className="about__description">
            I am a software developer based in the{" "}
            <span className="location US">San Francisco Bay Area</span>.
          </p>
          <p className="about__description">
            I come from <span className="location FR">Paris</span> where I
            graduated from Telecom Paris. I've been working at ServiceNow for
            more than 6 years as a frontend engineer. I'm a WebGL enthusiast!
          </p>
          <p className="about__description">
            Outside of work, I enjoy playing video games, jogging, cooking and
            drinking IPAs and hanging out with my dog.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
