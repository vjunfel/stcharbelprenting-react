import React from "react";

const Hero: React.FC = () => {
	return (
		<section className="pb-8 pt-20 md:pt-32 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center flex flex-col gap-4">
					<h2 className="text-4xl pb-3 font-extrabold tracking-tight sm:text-5xl md:text-7xl bg-gradient-to-r from-blue-700 via-purple-500 to-orange-700 bg-clip-text text-transparent">
						St. Charbel Printing Services in Cebu
					</h2>
					<p className="max-w-md mx-auto text-base text-gray-700 sm:text-lg md:text-xl md:max-w-3xl">
						High-quality printing solutions for all your personal and
						business needs
					</p>
					<strong className="max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-4 md:text-xl md:max-w-3xl">
						Open: Monday to Saturday, 8:00 AM to 5:00 PM
					</strong>
					
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div className="rounded-md shadow">
							{/* <a
								href="/contact"
								className="bg-slate-800 hover:bg-slate-900 text-white w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
							>
								Contact Us
							</a> */}
						</div>
					</div>					
				</div>
			</div>
		</section>
	);
}

export default Hero;
