import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);
const clickHandler = () => {
	setIsOpen((open) => !open);
	console.log("Clicked to open");
};
return (
	<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div className="flex items-center justify-between">
			<Link
				to="/"
				className="flex gap-2 items-center"
			>
				<img
					src="/logo.jpg"
					alt="StCharbel logo"
					className="rounded-full overflow-hidden w-[40px] h-[40px]"
				/>
				<h1 className="text-2xl font-bold">
					<span className="text-gray-100">StCharbel</span>
					<span className="text-blue-500">Printing</span>
				</h1>
			</Link>
			<div className="hidden md:block">
				<div className="flex items-center gap-8">
					<Link
						to="/"
						className="text-gray-100 hover:text-blue-200"
					>
						Services
					</Link>
					<Link
						to="/about"
						className="text-gray-100 hover:text-blue-200"
					>
						About Us
					</Link>
					<Link
						to="/contact"
						className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-4 rounded"
					>
						Contact
					</Link>
				</div>
			</div>

			<MenuIcon
				size={32}
				color={"white"}
				className="flex md:hidden cursor-pointer"
				onClick={clickHandler}
			/>
			{isOpen && <MobileMenu setIsOpen={setIsOpen} />}
		</div>
	</nav>
);
};

export default Navbar;
