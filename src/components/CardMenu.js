import React from "react";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as Comments } from "../images/comment.svg";
import { ReactComponent as Share } from "../images/share.svg";
import { ReactComponent as Bookmark } from "../images/bookMark.svg";
import "../styles/cardMenu.scss";

const CardMenu = () => {
	return (
		<div className="cardMenu">
			<div className="interactions">
				<Like className="icon" />
				<Comments className="icon" />
				<Share className="icon" />
			</div>
			<Bookmark className="icon" />
		</div>
	);
};

export default CardMenu;
