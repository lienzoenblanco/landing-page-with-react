import React from "react";
import "../../styles/card.css";
const Card = () => {
	return (
		<div className="card width-card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<div class="container"></div>
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
