// import React from 'react'

// function Services() {
//   return (
//     <section
// 					id="services"
// 					className="py-12 bg-gray-50"
// 				>
// 					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 						<div className="text-center">
// 							<h2 className="text-3xl font-extrabold text-gray-900">
// 								Our Services
// 							</h2>
// 							<p className="mt-4 text-lg text-gray-500">
// 								Choose from our wide range of printing services
// 							</p>
// 						</div>

// 						<motion.div
// 							className="mt-10"
// 							variants={containerVariants}
// 							initial="hidden"
// 							whileInView="visible"
// 							viewport={{ once: true }}
// 						>
// 							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
// 								{services.map((service) => (
// 									<motion.div
// 										key={service.title}
// 										className="pt-6"
// 										variants={itemVariants}
// 										whileHover={{ scale: 1.05 }}
// 										transition={{ type: "spring", stiffness: 300 }}
// 									>
// 										<div className="flow-root bg-white rounded-lg px-6 pb-8">
// 											<div className="-mt-6">
// 												<div>
// 													<span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
// 														<service.icon
// 															className="h-6 w-6 text-white"
// 															aria-hidden="true"
// 														/>
// 													</span>
// 												</div>
// 												<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
// 													{service.title}
// 												</h3>
// 												<p className="mt-5 text-base text-gray-500">
// 													{service.description}
// 												</p>
// 											</div>
// 										</div>
// 									</motion.div>
// 								))}
// 							</div>
// 						</motion.div>
// 					</div>
// 				</section>
//   )
// }

// export default Services