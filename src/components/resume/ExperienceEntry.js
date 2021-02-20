import React from 'react';

export default function ExperienceEntry(props) {
  const { date, location, description, title, companyName, duration, isCurrent, logo } = props;
  const BLOCK_NAME = 'experience-entry';
  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__date  ${isCurrent ? 'current' : null}`}>{date}</div>
      <div className={`${BLOCK_NAME}__title ${isCurrent ? 'current' : null}`}>{title}</div>
      <div className={`${BLOCK_NAME}__company-name`}>
        {companyName}
      </div>
      {/* <img className={`${BLOCK_NAME}__company-logo`} src={logo} /> */}
      <div className={`${BLOCK_NAME}__company-location ${isCurrent ? 'current' : null}`}>{location}</div>
      <div className={`${BLOCK_NAME}__duration`}>{duration}</div>
      <p className={`${BLOCK_NAME}__description`}>{description}</p>
    </div>
  );
}