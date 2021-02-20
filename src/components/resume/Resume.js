import React from 'react';
import EducationEntry  from './EducationEntry';
import ExperienceEntry from './ExperienceEntry';
import { educationEntries, experienceEntries } from '../../data/resume';

export default function Resume() {
  return (
    <div>
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

      <div className="resume-section">
        <div className="resume-section__title">Skills</div>
        <div className="resume-section__entry">Entry 1</div>
        <div className="resume-section__entry">Entry 2</div>
        <div className="resume-section__entry">Entry 3</div>
      </div>
    </div>
  );
}