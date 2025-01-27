import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
	return (
		<div className="min-h-screen w-full flex flex-col mx-auto">
			<header className="bg-gray-800 text-white py-4">
				<Navbar />
			</header>

			<main className="w-full h-full">
				<Outlet />
			</main>

			<footer className="bg-gray-800 text-white py-4">
        <Footer />
			</footer>
		</div>
	);
};

export default MainLayout;
