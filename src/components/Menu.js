import React from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Messenger } from "../images/messenger.svg";
import { ReactComponent as Post } from "../images/posts.svg";
import { ReactComponent as Notification } from "../images/notification.svg";
import { ReactComponent as SearchUser } from "../images/searchUser.svg";
import ProfileIcon from "./ProfileIcon";

const Menu = () => {
	return (
		<div className="menu">
			<Home className="icon" />
			<Messenger className="icon" />
			<Post className="icon" />
			<SearchUser className="icon" />
			<Notification className="icon" />
			<ProfileIcon storyBorder={true} size="small" />
		</div>
	);
};

export default Menu;
