import React from 'react';
import EducationEntry  from './EducationEntry';
import ExperienceEntry from './ExperienceEntry';
import Skills from './Skills';
import { educationEntries, experienceEntries, skillItems } from '../../data/resume';

export default function Resume() {
  return (
    <div>
      <div className="resume-section">
        <div className="resume-section__title">Skills</div>
        <Skills items={skillItems} />
      </div>
            
      <div className="resume-section">
        <div className="resume-section__title">Experience</div>
        {experienceEntries.map(item => {
          return <ExperienceEntry {...item} />;
        })}
      </div>

      <div className="resume-section">
        <div className="resume-section__title">Education </div>
        {educationEntries.map(item => {
          return <EducationEntry {...item} />;
        })}
      </div>
    </div>
  );
}