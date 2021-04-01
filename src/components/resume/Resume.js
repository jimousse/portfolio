import React from 'react';
import EducationEntry  from './EducationEntry';
import ExperienceEntry from './ExperienceEntry';
import Skills from './Skills';
import Link from '../Link';
import { educationEntries, experienceEntries, skillItems, resumePdf } from '../../data/resume';

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <Link primary label={resumePdf.label} href={resumePdf.url} includeArrow />
      </div>
      <div className="resume-section">
        <div className="resume-section__title">Skills</div>
        <Skills items={skillItems} />
      </div>
            
      <div className="resume-section">
        <div className="resume-section__title">Experience</div>
        {experienceEntries.map((item, i) => {
          return <ExperienceEntry key={i} {...item} />;
        })}
      </div>

      <div className="resume-section">
        <div className="resume-section__title">Education </div>
        {educationEntries.map((item, i) => {
          return <EducationEntry key={i} {...item} />;
        })}
      </div>
    </div>
  );
}