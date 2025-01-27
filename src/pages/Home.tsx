import React from "react";
import Hero from "../components/Hero";
import Producst from "./Products";
import FAQ from "../components/FAQ";

const Home: React.FC = () => {
	return (
		<div>
			<Hero />
			<Producst />
			<FAQ />
		</div>
	);
};

export default Home;
