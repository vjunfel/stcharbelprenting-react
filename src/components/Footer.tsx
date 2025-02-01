import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	const year = new Date();
	return (
		<div className="w-full flex items-center justify-center flex-col py-10 gap-4">
			<div className="w-full max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex md:flex-row justify-between flex-col text-center gap-4">
				<p className="w-fulltext-base text-gray-200">
					© {year.getFullYear()} St. Charbel Printing. All rights reserved.
				</p>
				<div className="flex flex-row gap-4 items-center justify-center ">
					<Link	to="https://www.facebook.com/jerry.cagata.1" target="_blank" className="hover:text-blue-600"><Facebook /></Link>
					<Link to='#' className="hover:text-pink-500"><Instagram /></Link>
					<Link to='#' className="hover:text-blue-400"><Twitter /></Link>
					<Link to='#' className="hover:text-red-700"><Youtube /></Link>
				</div>
				<div className="text-gray-200">
					<Link to="https://junfel.xyz">Develop by: Junfel</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
