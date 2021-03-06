import React from "react";
import Card from "./card.jsx";
import "../../styles/card.css";
import Menu from "./menu.jsx";
import Hero from "./hero.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Menu />
			<Hero />
			<div className="d-flex justify-content-center">
				<Card>Card title</Card>
				<Card>Card title</Card>
				<Card>Card title</Card>
				<Card>Card title</Card>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
