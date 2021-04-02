import React, { useState, useEffect, useContext } from "react";
import swlogo from "../../img/starwarslogo.png";
import "../../styles/start.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Startintro = () => {
	return (
		<div className="text-center swbgintro">
			<div>
				<h1 className="swtitle1">Welcome to Star Wars Fan Blog</h1>
				<img src={swlogo} alt="StarWarsLogo" />
			</div>
			<div className="mb-3">
				<Link to="/login" className="btn button-intro">
					Log in
				</Link>
				<span>............................. </span>
				<Link to="/signup" className="btn button-intro">
					Sign up
				</Link>
			</div>
		</div>
	);
};
