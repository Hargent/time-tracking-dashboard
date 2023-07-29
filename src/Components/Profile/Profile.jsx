import ProfileImage from "../../Assets/images/image-jeremy.png";
import PropTypes from "prop-types";
import React from "react";

const Profile = props => {
	return (
		<div className="profile__container">
			<div className="profile__details">
				<img src={ProfileImage} alt="Jeremy" />
				<p>Report for </p>
				<h1>Jeremy Robson</h1>
			</div>
			<div className="profile__duration">
				<p>Daily</p>
				<p>Weekly</p>
				<p>Monthly</p>
			</div>
		</div>
	);
};

Profile.propTypes = {};

export default Profile;
