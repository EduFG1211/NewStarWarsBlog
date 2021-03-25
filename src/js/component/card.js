import React, { useEffect, useState, useContext } from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
//import { propTypes } from "react-bootstrap/esm/Image";
export function PersonCard(props) {
	const { store, actions } = useContext(Context);
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
				<Link to={"/detailchar/" + props.pos}>
					<a href="#" className="btn btn-light text-primary border border-primary rounded float-left">
						Learn more!
					</a>
				</Link>
				<button
					type="button"
					className="btn btn-light btn-outline-warning text-warning border border-warning float-right"
					onClick={() => actions.favFunction(props.name)}>
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
	PersonCard.propTypes = {
		name: PropTypes.string,
		gender: PropTypes.string,
		hairColor: PropTypes.string,
		eyeColor: PropTypes.string,
		pos: PropTypes.number
	};
}
export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card">
			<img
				className="card-img-top charplanet"
				src="https://pbs.twimg.com/profile_images/946790797034344448/wsg_T21V.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population: {props.population}</p>
				<p className="card-text">Terrain: {props.terrain}</p>
				<Link to={"/detailplan/" + props.pos}>
					<a href="#" className="btn btn-light text-primary border border-primary rounded float-left">
						Learn more!
					</a>
				</Link>
				<button
					type="button"
					className="btn btn-light btn-outline-warning text-warning border border-warning float-right"
					onClick={() => actions.favFunction(props.name)}>
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
	PlanetCard.propTypes = {
		name: PropTypes.string,
		population: PropTypes.string,
		terrain: PropTypes.string,
		pos: PropTypes.number
	};
};
