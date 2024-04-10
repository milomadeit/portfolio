import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, liveSite } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div>
			
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<Link to={link}>
							<div className="project-link-text">{linkText}</div>
							</Link>
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<Link to={liveSite}>
								
							<div className="project-link-text">View Site</div>

							</Link>
						</div>
					</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
