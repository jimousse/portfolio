import React from 'react';
const BLOCK_NAME = 'education-entry';

export default function EducationEntry(props) {
  const { date, location, description, diploma, schoolName, country } = props;
  return (
    <div className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__date`}>{date}</div>
      <div className={`${BLOCK_NAME}__name`}>{schoolName}</div>
      <div className={`${BLOCK_NAME}__location location ${country}`}>{location}</div>
      <div className={`${BLOCK_NAME}__diploma`}>{diploma}</div>
      <p className={`${BLOCK_NAME}__description`}>{description}</p>
    </div>
  );
}