import React from 'react';
import { projectsData } from '../data/projects';
const BLOCK_NAME = 'project';

export default function Projects() {
	return (
		<div className="projects">
			{projectsData.map(({ title, description, img, github, demo, topics }, i) => {
				return (
					<div key={i} className={`${BLOCK_NAME}__card`}>
						<div
							className={`${BLOCK_NAME}__image`}
							style={{ backgroundImage: `url(${img})` }}
						/>
						<h5 className={`${BLOCK_NAME}__title`}>{title}</h5>
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
							<a className={`${BLOCK_NAME}__link ${BLOCK_NAME}__link--github`} href={github} />
							{demo &&
							<a className={`${BLOCK_NAME}__link ${BLOCK_NAME}__link--website`} href={demo} />}
						</div>
					</div>
				);
			})}
		</div>
	);
}