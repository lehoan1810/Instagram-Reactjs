import React from "react";
import ProfileIcon from "./ProfileIcon";
import "../styles/Story.scss";
import User from "../data/Users";

const Story = () => {
	return (
		<>
			{User.map((item, id) => (
				<div className="story">
					<ProfileIcon size="big" storyBorder={true} />
					<span className="account-name">{item.username}</span>
				</div>
			))}
		</>
	);
};

export default Story;
