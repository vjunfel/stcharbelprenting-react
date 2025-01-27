import React from "react";
import owner from "../assets/images/owner.jpg";

const About: React.FC = () => {
	return (
		<section className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						About Us
					</h1>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="text-gray-700 flex-1 flex flex-col justify-start items-center p-4">
						<p className="text-xl mb-4">
							St. Charbel Printing services is an innovative solutions to
							a dynamic and continually changing demands in printing. We
							made efforts in research and develop techniques to
							facilitate changes in Printing Industry and accommodate the
							diverse demand in printing.
						</p>
						<p className="text-xl">
							We are dedicated in creating high-quality printing
							that suits your needs. We are committed to providing the
							best service and solutions to your printing problems.
						</p>
					</div>

					<div className="flex-1 flex justify-center overflow-hidden">
						<img
							src={owner}
							alt="Owner profile"
							className="md:w-[350px] md:h-[500px] lg:w-[446px] lg:h-auto rounded-md"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
