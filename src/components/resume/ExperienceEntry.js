import React from 'react';

const BLOCK_NAME = 'experience-entry';
const TOOL_LIST_HEADER = 'Tools:';
const RESP_LIST_HEADER = 'My responsibilities included:';
const MILLISECONDS_IN_MONTH = 2.628 * Math.pow(10, 9);
const MILLISECONDS_IN_YEAR = 3.154 * Math.pow(10, 10);

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
    startTimestamp,
    tools,
    responsibilities,
    responsibilitiesHeader,
  } = props;

  function calculateEllapsedTime() {
    if (!isCurrent) return;
    const ellapsedMilliseconds = Date.now() - startTimestamp;
    const numOfYears = ellapsedMilliseconds / MILLISECONDS_IN_YEAR;
    const displayYears = Math.floor(numOfYears);
    const numOfMonths =
      (ellapsedMilliseconds - displayYears * MILLISECONDS_IN_YEAR) /
      MILLISECONDS_IN_MONTH;
    const displayMonths = Math.floor(numOfMonths);
    if (displayMonths && !displayYears) {
      return `${displayMonths} mos`;
    } else if (!displayMonths && displayYears) {
      return `${displayYears} yrs`;
    }
    return `${displayYears} yrs ${displayMonths} mos`;
  }

  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__date  ${isCurrent ? 'current' : null}`}>
        {date}
      </div>
      <div className={`${BLOCK_NAME}__title ${isCurrent ? 'current' : null}`}>
        {title}
      </div>
      <div
        className={`${BLOCK_NAME}__company-name  ${
          isCurrent ? 'current' : null
        }`}
      >
        {companyName}
      </div>
      <div className={`${BLOCK_NAME}__company-location location ${country}`}>
        {location}
      </div>
      <div className={`${BLOCK_NAME}__duration`}>
        {isCurrent ? calculateEllapsedTime() : duration}
      </div>
      <div className={`${BLOCK_NAME}__description`}>
        <p>{description}</p>
        {responsibilities && (
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
          </p>
        )}
        {tools && (
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
          </p>
        )}
      </div>
    </div>
  );
}
