import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import { propTypes } from "react-bootstrap/esm/Image";
export function PersonCard(props) {
	return (
		<div className="card">
			<img
				className="card-img-top charplanet"
				src="https://webstockreview.net/images/darth-vader-clipart-logo-4.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair color: {props.hairColor}</p>
				<p className="card-text">Eye color: {props.eyeColor}</p>
				<Link to="/demo">
					<a href="#" className="btn btn-light text-primary border border-primary rounded float-left">
						Learn more!
					</a>
				</Link>
				<a href="#" className="btn btn-light text-warning border border-warning float-right">
					<i className="far fa-heart btn-outline-warning" />
				</a>
			</div>
		</div>
	);
	PersonCard.propTypes = {
		name: PropTypes.string,
		gender: PropTypes.string,
		hairColor: PropTypes.string,
		eyeColor: PropTypes.string
	};
}
export const PlanetCard = () => {
	return (
		<div className="card">
			<img
				className="card-img-top charplanet"
				src="https://pbs.twimg.com/profile_images/946790797034344448/wsg_T21V.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Planet No.XX</h5>
				<p className="card-text">Population: XXXX</p>
				<p className="card-text">Terrain: XXXX</p>
				<a href="#" className="btn btn-light text-primary border border-primary rounded float-left">
					Learn more!
				</a>
				<a href="#" className="btn btn-light text-warning border border-warning float-right">
					<i className="far fa-heart" />
				</a>
			</div>
		</div>
	);
};
