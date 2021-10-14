import React from "react";
import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
// import users from "../data/Users";
// import { Link } from "react-router-dom";

const Profile = ({ username, caption, urltext, size, image, storyBorder }) => {
	return (
		<div className="profile">
			<ProfileIcon storyBorder={storyBorder} size={size} image={image} />
			<div className="textContainer">
				<span className="accountName">{username}</span>
				<span className={`caption ${size}`}>{caption}</span>
			</div>
			<a href="/">{urltext}</a>
		</div>
	);
};

export default Profile;
