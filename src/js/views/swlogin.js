import React, { useState, useEffect, useContext } from "react";
import swlogo from "../../img/starwarslogo.png";
import "../../styles/swlogin.scss";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";

export const Swlogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/token", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
				sessionStorage.setItem("my_user_id", data.user_id);
				//let my_token = sessionStorage.getItem("my_token");
				setAuth(true);
			})
			.catch(error => console.log(error));
	};

	return (
		<div className="swbgdark">
			<h1 className="swtitle1">Log in</h1>
			<div id="swcardlogin" className="text-center rounded">
				<form onSubmit={() => handleSubmit(event)} id="formlogin">
					<div className="mb-3">
						<label className="form-label">Whats your Jedi/Sith email?</label>
						<input
							type="email"
							className="form-control text-center"
							aria-describedby="emailHelp"
							placeholder="eg: yodabest@starwars.com"
							value={email}
							onChange={event => setEmail(event.target.value)}
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
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<button type="submit" className="btn rounded button-login">
						Log in
					</button>
				</form>
				{auth ? <Redirect to="/home" /> : null}
			</div>
		</div>
	);
};
