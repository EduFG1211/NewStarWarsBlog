import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swlogo from "../../img/starwarslogo.png";
import "../../styles/navbar.scss";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark">
			<Link to="/home">
				<img className="imgswlogo" src={swlogo} alt="StarWarsLogo" />
			</Link>
			<Link to="/" className="btn rounded button-logout">
				Log out
			</Link>
			<ButtonGroup aria-label="Basic example">
				<DropdownButton id="dropdown-basic-button" title={"Favorites"} className="m-1">
					{store.favlist.length > 0 ? (
						store.favlist.map((item, index) => {
							return (
								<Dropdown.Item key={index}>
									{item}{" "}
									<Button onClick={() => actions.favFunctionDelete(index)}>
										<i className="fas fa-trash-alt" />
									</Button>
								</Dropdown.Item>
							);
						})
					) : (
						<Dropdown.Item>Empty</Dropdown.Item>
					)}

					{}
				</DropdownButton>
				<Button variant="danger" className="m-1">
					{store.favlist.length}
				</Button>
			</ButtonGroup>
		</nav>
	);
};
