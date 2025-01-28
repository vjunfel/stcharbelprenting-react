import React from "react";
import Hero from "../components/Hero";
import Producst from "./Products";
import FAQ from "../components/FAQ";
import ImageSlider from "../components/ImageSlider";
import item1 from "../assets/images/item1.jpeg";
import item2 from "../assets/images/item2.jpeg";
import item7 from "../assets/images/item7.jpeg";
import item4 from "../assets/images/item4.jpeg";
import item5 from "../assets/images/item5.jpeg";
import item6 from "../assets/images/item6.jpeg";

const Home: React.FC = () => {
	return (
		<div>
			<Hero />
			<ImageSlider images={[item1, item2, item7, item4, item5, item6]} />
			<Producst />
			<FAQ />
		</div>
	);
};

export default Home;
