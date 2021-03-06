import React, { useState, useEffect, useContext } from "react";
import swlogo from "../../img/starwarslogo.png";
import "../../styles/swlogin.scss";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";

export const Swsignup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(auth);

		const body = {
			email: email,
			password: password
		};

		fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(error => console.log(error));
		console.log(auth);
	};

	return (
		<div className="swbgdark">
			<h1 className="swtitle1">Register</h1>
			<div id="swcardlogin" className="text-center rounded">
				<form onSubmit={() => handleSubmit(event)} id="formlogin">
					<div className="mb-3">
						<label className="form-label">Create your Jedi/Sith email</label>
						<input
							type="email"
							className="form-control text-center"
							aria-describedby="emailHelp"
							placeholder="eg: daddyvader@starwars.com"
							//value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<div id="emailTip" className="form-text">
							I promise Ill never share your email with the Order 66.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Fabricate your password-saber
						</label>
						<input
							type="password"
							className="form-control text-center"
							placeholder="eg: imnotyourfather"
							//value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<button type="submit" className="btn rounded button-login">
						Sign up
					</button>
				</form>
				{auth ? <Redirect to="/login" /> : null}
				{/* {auth ? <Redirect to="/login" /> : <Redirect to="/signup" />} */}
			</div>
		</div>
	);
};
