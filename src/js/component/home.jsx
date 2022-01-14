import React from "react";
import Card from "./card.jsx";
import "../../styles/card.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="card">
			<Card>Card title </Card>;<Card>Card title</Card>;
			<Card>Card title</Card>;<Card>Card title</Card>;
		</div>
	);
};

export default Home;
