import React from "react";
import { faqs } from "../constant/data";

const FAQ: React.FC = () => {
	return (
		<section
			id="faq"
			className="bg-blue-400 px-5 py-20 md:p-20 flex justify-center items-center "
		>
			<div className="flex justify-center items-center flex-col">
				<h2 className="font-bold text-4xl text-center mb-16">
					Frequently Asked Questions
				</h2>
				<div className="">
					
					<ul className="space-y-4">
						{faqs.map((faq, index) => (
							<li
								key={index}
								className="bg-white text-gray-700 rounded-lg p-6 shadow-sm"
							>

								<h3 className="font-bold text-lg mb-2">
									{faq.question}
								</h3>
								<p className="">{faq.answer}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default FAQ;
