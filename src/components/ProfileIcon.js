import React from "react";
import "../styles/profileIcon.scss";
import avt from "../images/img1.jpg";

const ProfileIcon = ({ storyBorder, size }) => {
	return (
		<div className={storyBorder ? "storyBorder" : ""}>
			<img className={`profileIcon-${size}`} src={avt} alt="" />
		</div>
	);
};

export default ProfileIcon;
