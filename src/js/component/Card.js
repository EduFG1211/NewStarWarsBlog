import React from "react";
export const MiCard = () => {
	return (
		<div className="card text-center">
			<img src="http://placehold.it/500x325.jpg" className="card-img-top" alt="Your Img here!" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
