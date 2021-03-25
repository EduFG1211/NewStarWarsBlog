import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/detail.scss";

export const CharacterDetail = () => {
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
							<h5 className="card-title">{store.characters[params.characterid].name}</h5>
							<p className="card-text">
								In fiction, a caracter is a person or other being in a narrative. The character may be
								entirely fictional or based on a real life person, in which case the distinction of a
								fictional vs real character may be made.
							</p>
						</div>
					</div>
				</div>
				<div className="row border-top border-warning text-center mt-3">
					<div className="col-2">
						<strong>Name</strong>
					</div>
					<div className="col-2">
						<strong>Birth Year</strong>
					</div>
					<div className="col-2">
						<strong>Gender</strong>
					</div>
					<div className="col-2">
						<strong>Height</strong>
					</div>
					<div className="col-2">
						<strong>Skin Color</strong>
					</div>
					<div className="col-2">
						<strong>Eye Color</strong>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-2">{store.characters[params.characterid].name}</div>
					<div className="col-2">{store.characters[params.characterid].birth_year}</div>
					<div className="col-2">{store.characters[params.characterid].gender}</div>
					<div className="col-2">{store.characters[params.characterid].height}</div>
					<div className="col-2">{store.characters[params.characterid].skin_color}</div>
					<div className="col-2">{store.characters[params.characterid].eye_color}</div>
				</div>
			</div>
		</div>
	);
};
