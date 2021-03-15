import React from "react";
import { Link } from "react-router-dom";
import swlogo from "../../img/starwarslogo.png";
import "../../styles/navbar.scss";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars Blog</span>
				<img className="imgswlogo" src={swlogo} alt="StarWarsLogo" />
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Favorites">
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
	);
};
