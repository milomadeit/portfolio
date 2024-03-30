import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./iconlogo.png"
								alt="web3logo"
								className="work-image"
							/>
							<div className="work-title">Web3 Consultant and Advisor</div>
							<div className="work-subtitle">
								Artist Onboarding • Generative Art/Metadata Creation
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./QTlogo.png"
								alt="qt"
								className="work-image"
							/>
							<div className="work-title">QuikTrip</div>
							<div className="work-subtitle">
								Customer Service • Clerk
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
