import React from "react";
import Card from "./card.jsx";
import "../../styles/card.css";
import Menu from "./menu.jsx";
import Hero from "./hero.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Menu />
			<Hero />
			<div className="card">
				<Card>Card title </Card>;<Card>Card title</Card>;
				<Card>Card title</Card>;<Card>Card title</Card>;
			</div>
		</div>
	);
};

export default Home;
