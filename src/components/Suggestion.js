import React from "react";
import "../styles/suggestion.scss";
import Profile from "./Profile";

const Suggestion = () => {
	return (
		<div className="suggestions">
			<div className="titleContainer">
				<div className="title">Gợi ý cho bạn</div>
				<a href="/">Xem tất cả</a>
			</div>
			<Profile
				username="HongGhi"
				caption="có _mthuyenn + 3 more"
				urltext="follow"
				size="small"
				storyBorder={true}
			/>
			<Profile
				username="HongGhi"
				caption="có _mthuyenn + 3 more"
				urltext="follow"
				size="small"
				storyBorder={true}
			/>
			<Profile
				username="HongGhi"
				caption="có _mthuyenn + 3 more"
				urltext="follow"
				size="small"
				storyBorder={true}
			/>
			<Profile
				username="HongGhi"
				caption="có _mthuyenn + 3 more"
				urltext="follow"
				size="small"
				storyBorder={true}
			/>
		</div>
	);
};

export default Suggestion;
