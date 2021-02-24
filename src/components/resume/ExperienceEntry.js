import React from 'react';

const BLOCK_NAME = 'experience-entry';
const TOOL_LIST_HEADER = 'Tools:';
const RESP_LIST_HEADER = 'My responsibilities included:';
export default function ExperienceEntry(props) {
  const { 
    date, 
    location,
    country, 
    description, 
    title, 
    companyName, 
    duration, 
    isCurrent, 
    tools,
    responsibilities,
    responsibilitiesHeader
  } = props;
  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__date  ${isCurrent ? 'current' : null}`}>{date}</div>
      <div className={`${BLOCK_NAME}__title ${isCurrent ? 'current' : null}`}>{title}</div>
      <div className={`${BLOCK_NAME}__company-name  ${isCurrent ? 'current' : null}`}>
        {companyName}
      </div>
      <div className={`${BLOCK_NAME}__company-location location ${country}`}>{location}</div>
      <div className={`${BLOCK_NAME}__duration`}>{duration}</div>
      <div className={`${BLOCK_NAME}__description`}>
        <p>{description}</p>
        {responsibilities &&
        <p className="responsibilities">
          {responsibilitiesHeader || RESP_LIST_HEADER}
        <ul className="responsibilities__list">
          {responsibilities.map((resp, i) => {
            return (
              <li key={i} className="responsibilities__item">
                <span>{resp}</span>
              </li>
            );
          })}
        </ul>
        </p>}
        {tools &&
        <p className="tools">
          {TOOL_LIST_HEADER}
          <ul className="tools__list">
            {tools.map((tool, i) => {
              return (
                <li className="tools__item" key={i}>
                  <span>{tool}</span>
                </li>
              );
            })}
          </ul>
        </p>}
      </div>
    </div>
  );
}