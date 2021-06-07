import React, { forwardRef } from 'react';
import { projectsData } from '../data/projects';
import SectionTitle from './SectionTitle';
const BLOCK_NAME = 'project';

const Projects = forwardRef((props, ref) => {
	return (
		<section ref={ref} id={props.id} className="section">
			<SectionTitle title={props.label} />
			<div  className="projects">
				{projectsData.map(({ title, description, img, github, demo, topics }, i) => {
					const ghAriaLabel = `View source code on github for my project ${title}`;
					const demoAriaLabel = `View demo page for my project ${title}`;
					return (
						<div key={i} className={`${BLOCK_NAME}__card`}>
							<div
								className={`${BLOCK_NAME}__image`}
								style={{ backgroundImage: `url(${img})` }}
							/>
							<span className={`${BLOCK_NAME}__title`}>{title}</span>
							<div className={`${BLOCK_NAME}__description`}>{description}</div>
							{topics &&
								<div className={`${BLOCK_NAME}__topics`}>
								{topics.map(topic => {
									return (
										<span className={`${BLOCK_NAME}__topic`}>
											{topic}
										</span>
									);
								})}
								</div>
							}
							<div className={`${BLOCK_NAME}__links`}>
								<a className={`${BLOCK_NAME}__link ${BLOCK_NAME}__link--github`} href={github} aria-label={ghAriaLabel} />
								{demo &&
								<a className={`${BLOCK_NAME}__link ${BLOCK_NAME}__link--website`} href={demo} aria-label={demoAriaLabel} />}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
});

export default Projects;