import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/detail.scss";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);
	const params = useParams();

	return (
		<div className="swbgdark swtitle1">
			<div className="container">
				<div className="row mt-3">
					<div className="col-4">
						<img
							className="container"
							src="https://www.nomadlogic.com/wp-content/uploads/2019/03/star-wars-logo.jpg"
							alt="Card image cap"
						/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{store.planets[params.planetid].name}</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div className="row border-top border-warning text-center mt-3">
					<div className="col-2">
						<strong>Name</strong>
					</div>
					<div className="col-2">
						<strong>Climate</strong>
					</div>
					<div className="col-2">
						<strong>Population</strong>
					</div>
					<div className="col-2">
						<strong>Orbital Period</strong>
					</div>
					<div className="col-2">
						<strong>Rotation Period</strong>
					</div>
					<div className="col-2">
						<strong>Diameter</strong>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-2">{store.planets[params.planetid].name}</div>
					<div className="col-2">{store.planets[params.planetid].climate}</div>
					<div className="col-2">{store.planets[params.planetid].population}</div>
					<div className="col-2">{store.planets[params.planetid].orbital_period}</div>
					<div className="col-2">{store.planets[params.planetid].rotation_period}</div>
					<div className="col-2">{store.planets[params.planetid].diameter}</div>
				</div>
			</div>
		</div>
	);
};
