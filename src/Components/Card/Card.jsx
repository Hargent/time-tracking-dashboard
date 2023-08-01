import { ReactComponent as CardEllipsisIcon } from "../../Assets/Icons/icon-ellipsis.svg";
import { ReactComponent as ExerciseIcon } from "../../Assets/Icons/icon-exercise.svg";
import { ReactComponent as PlayIcon } from "../../Assets/Icons/icon-play.svg";
import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as SelfIcon } from "../../Assets/Icons/icon-self-care.svg";
import { ReactComponent as SocialIcon } from "../../Assets/Icons/icon-social.svg";
import { ReactComponent as StudyIcon } from "../../Assets/Icons/icon-study.svg";
import { ReactComponent as WorkIcon } from "../../Assets/Icons/icon-work.svg";

const Card = ({ report }) => {
	let Icon;

	switch (report.title) {
		case "work":
			Icon = <WorkIcon />;

			break;
		case "play":
			Icon = <PlayIcon />;

			break;
		case "study":
			Icon = <StudyIcon />;

			break;
		case "exercise":
			Icon = <ExerciseIcon />;

			break;
		case "social":
			Icon = <SocialIcon />;

			break;
		case "self care":
			Icon = <SelfIcon />;

			break;
		default:
			Icon = null;
	}

	return (
		<div
			className={
				report.title
					? `card__container ${report.title} `
					: "card__container"
			}>
			<div className="card__header">
				<div className="card__header--icon">{Icon}</div>
			</div>
			<div className="card__content">
				<div className="card__content__title">
					<p>{report.title}</p>
					<div className="card__content__title--icon">
						<CardEllipsisIcon />
					</div>
				</div>
				<div className="card__content__details">
					<h1>{report.hours}hrs</h1>
					<p>
						last {report.type} - {report.previous}hrs
					</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	report: PropTypes.object
};

export default Card;
