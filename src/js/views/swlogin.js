import React, { useState, useEffect, useContext } from "react";
import swlogo from "../../img/starwarslogo.png";
import "../../styles/swlogin.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Swlogin = () => {
	return (
		<div className="swbgdark">
			<div id="swcardlogin" className="text-center rounded">
				<form id="formlogin">
					<div className="mb-3">
						<label className="form-label">Whats your Jedi/Sith email?</label>
						<input
							type="email"
							className="form-control text-center"
							aria-describedby="emailHelp"
							placeholder="eg: yodabest@starwars.com"
						/>
						<div id="emailTip" className="form-text">
							I promise Ill never share your email with the Order 66.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control text-center"
							placeholder="eg: iluvmygreensaber"
						/>
					</div>
					<Link to="/home" className="btn rounded button-login">
						Log in
					</Link>
				</form>
			</div>
		</div>
	);
};
