import React, { useState, useEffect, useContext } from "react";
import { PersonCard, PlanetCard } from "../component/card";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);

	setInterval(() => {
		store.characters.length > 0 ? setCargo(true) : "";
	}, 2000);

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
									<div key={index}>
										<PersonCard name="gfgfgfg" />
									</div>
								);
						  })
						: ""}
					<PersonCard name="{store.characters[2].name}" />
				</div>
				<div className="row">
					<h2 className="swtitle2">Planets</h2>
				</div>
				<div className="scrollmenu">
					<PlanetCard />
				</div>
			</div>
		</div>
	);
};
