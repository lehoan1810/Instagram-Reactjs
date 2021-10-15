import React from "react";
import "../styles/navigation.scss";
import Logo from "../images/logo.png";
import Menu from "./Menu";

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="container">
				<img className="logo" src={Logo} alt="instagram logo" />
				{/* <input className="search">
					<img className="searchIcon" src="" alt="" />
					<span className="searchText">Search</span>
				</input> */}
				<input className="search" placeholder="search" />
				<Menu />
			</div>
		</div>
	);
};

export default Navigation;
