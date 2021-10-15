import React from "react";
import CardMenu from "./CardMenu";
import Profile from "./Profile";
import Comment from "./Comment";
import { ReactComponent as CardButton } from "../images/CardButton.svg";
import "../styles/card.scss";

const Card = ({
	storyBorder,
	image,
	comments,
	likedByText,
	likedByNumber,
	hours,
}) => {
	return (
		<div className="card">
			<header>
				<Profile size="medium" storyBorder={storyBorder} username="HongGhi" />
				<CardButton className="cardButton" />
			</header>
			<img className="cardImage" src={image} alt="card content" />
			<CardMenu />
			<div className="likedBy">
				<Profile size="small" />
				<span>
					Liked by <strong>{likedByText}</strong> and{" "}
					<strong>{likedByNumber} others</strong>
				</span>
			</div>
			<div className="comments">
				{comments.map((comment) => {
					return (
						<Comment
							key={comment.id}
							accountName={comment.user}
							comment={comment.text}
						/>
					);
				})}
			</div>
			<div className="timePosted">{hours} HOURS AGO</div>
			<div className="addComment">
				<div className="commentText">Add a comment...</div>
				<div className="postText">Post</div>
			</div>
		</div>
	);
};

export default Card;
