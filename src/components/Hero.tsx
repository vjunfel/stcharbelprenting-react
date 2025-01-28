import React from "react";
import splashSM from "../assets/svg/splash-sm.svg";
import splashMD from "../assets/svg/splash-md.svg";
import splashLG from "../assets/svg/splash-lg.svg";

const Hero: React.FC = () => {
	return (
		<section className="relative pb-8 pt-20 md:pt-32 bg-gray-50 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center flex flex-col gap-4">
					<h2 className="z-10 text-4xl pb-3 font-extrabold tracking-tight sm:text-5xl md:text-7xl bg-gradient-to-r from-blue-700 via-purple-500 to-orange-700 bg-clip-text text-transparent">
						St. Charbel Printing Services in Cebu
					</h2>
					<p className="z-10 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:text-xl md:max-w-3xl">
						High-quality printing solutions for all your personal and
						business needs
					</p>
					<strong className="z-10 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-4 md:text-xl md:max-w-3xl">
						Open: Monday to Saturday, 8:00 AM to 5:00 PM
					</strong>
					
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 z-1">
						<div className="rounded-md  w-full">
						</div>
							<img src={splashSM} alt="Splash" className=" absolute top-[15%] w-[100px] opacity-50 lg:opacity-80" />
							<img src={splashMD} alt="Splash" className="absolute top-45 right-8 w-[250px] opacity-15 lg:opacity-80"/>
							<img src={splashLG} alt="Splash" className="absolute top-[55%] left-[10%] w-[120px] sm:bottom-1 opacity-10 lg:opacity-50" />
					</div>					
				</div>
			</div>
		</section>
	);
}

export default Hero;
