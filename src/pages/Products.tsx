import React from "react";
import CardItems from "../components/CardItems";
import { productItem } from "../constant/data";

const Producst: React.FC = () => {
	return (
		<div className="bg-gray-100 w-full p-10 md:py-28 h-auto flex flex-col justify-center">
			<h2 className="font-bold text-4xl text-center mb-16 text-gray-700">
				Recent Products
			</h2>
			<ul className="w-full max-h-full justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-8">
				{productItem.map((product, i) => (
					<li
						key={i}
						className="w-full h-auto"
					>
						<CardItems
							src={product.imgSrc}
							alt={product.alt}
							width={400}
							height={100}
							name={product.name}
							description={product.description}
							className="w-full min-h-full bg-white overflow-hidden shadow-lg transition-scale duration-200 group-hover:scale-110 object-contain items-center rounded-2xl"
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Producst;
