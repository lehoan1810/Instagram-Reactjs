import React from "react";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import "../styles/sidebar.scss";
import image from "../images/img1.jpg";
import Suggestion from "./Suggestion";
import Footer from "./Footer";

const Siderbar = () => {
	return (
		<Sticky topOffset={-80}>
			<div className="sidebar">
				<Profile
					username="HongGhi"
					caption="hello nha"
					urltext="switch"
					size="big"
					image={image}
					storyBorder="true"
				/>
				<Suggestion />
				<Footer />
			</div>
		</Sticky>
	);
};

export default Siderbar;
