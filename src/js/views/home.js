import React from "react";
import { PersonCard } from "../component/Card";
import { PlanetCard } from "../component/Card";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center swbgdark">
		<div>
			<h1 className="swtitle1">In a website far far away...</h1>
		</div>
		<div className="container-fluid">
			<div className="row">
				<h2 className="swtitle2">Characters</h2>
			</div>
			<div className="scrollmenu">
				<PersonCard />
				<PersonCard />
				<PersonCard />
				<PersonCard />
				<PersonCard />
				<PersonCard />
				{/* <div className="card">
					<img
						className="card-img-top charplanet"
						src="https://webstockreview.net/images/darth-vader-clipart-logo-4.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Character No.XX</h5>
						<p className="card-text">XXXXXXX</p>
						<a href="#" className="btn btn-light text-primary border border-primary rounded float-left">
							Learn more!
						</a>
						<a href="#" className="btn btn-light text-warning border border-warning float-right">
							<i className="far fa-heart" />
						</a>
					</div>
				</div> */}
			</div>
			<div className="row">
				<h2 className="swtitle2">Planets</h2>
			</div>
			<div className="scrollmenu">
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				{/* <div className="card">
					<img
						className="card-img-top charplanet"
						src="https://pbs.twimg.com/profile_images/946790797034344448/wsg_T21V.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Planet No.XX</h5>
						<p className="card-text">XXXXXXX</p>
						<a href="#" className="btn btn-light text-primary border border-primary rounded float-left">
							Learn more!
						</a>
						<a href="#" className="btn btn-light text-warning border border-warning float-right">
							<i className="far fa-heart" />
						</a>
					</div>
				</div> */}
			</div>
		</div>
	</div>
);
