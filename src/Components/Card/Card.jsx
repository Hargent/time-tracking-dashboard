import { ReactComponent as CardEllipsisIcon } from "../../Assets/Icons/icon-ellipsis.svg";
import { ReactComponent as CardIcon } from "../../Assets/Icons/icon-work.svg";
import PropTypes from "prop-types";
import React from "react";

const Card = props => {
	return (
		<div className="card__container">
			<div className="card__header">
				<CardIcon />
			</div>
			<div className="card__content">
				<div className="card__content__title">
					<p>Work</p>
					<CardEllipsisIcon />
				</div>
				<div className="card__content__details">
					<h1>36hrs</h1>
					<p>last week - 36hrs</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {};

export default Card;
