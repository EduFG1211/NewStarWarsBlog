import React, { useState, useEffect, useContext } from "react";
import { PersonCard, PlanetCard } from "../component/card";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);
	const [cargo2, setCargo2] = useState(false);

	setInterval(() => {
		store.characters.length > 0 ? setCargo(true) : "";
		store.planets.length > 0 ? setCargo2(true) : "";
	}, 2000);
	//console.log(store.characters);
	//console.log(sessionStorage.getItem("my_token"));

	return (
		<div className="text-center swbgdark">
			<div>
				<h1 className="swtitle1">In a website far far away...</h1>
			</div>
			<div className="container-fluid">
				<div className="row">
					<h2 className="swtitle2">Characters</h2>
				</div>
				<div className="scrollmenu">
					{cargo
						? store.characters.map((item, index) => {
								return (
									<div className="scroll" key={index}>
										<PersonCard
											name={store.characters[index].name}
											gender={store.characters[index].gender}
											hairColor={store.characters[index].hair_color}
											eyeColor={store.characters[index].eye_color}
											pos={index}
										/>
									</div>
								);
						  })
						: ""}
				</div>
				<div className="row">
					<h2 className="swtitle2">Planets</h2>
				</div>
				<div className="scrollmenu">
					{cargo2
						? store.planets.map((item, index) => {
								return (
									<div className="scroll" key={index}>
										<PlanetCard
											name={store.planets[index].name}
											population={store.planets[index].population}
											terrain={store.planets[index].terrain}
											pos={index}
										/>
									</div>
								);
						  })
						: ""}
				</div>
			</div>
		</div>
	);
};
