import { LoaderCircle, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [sending, setSending] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [status, setStatus] = useState<boolean | null>(null);
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const templateParams = {
		from_name: email,
		to_name: "StCharbel Printing",
		message,
	};

	const sendEmail = async (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
    
		if (!name) return setErrorMessage("name-error");
    if (!email) return setErrorMessage("email-error");
    if (!emailRegex.test(email)) {
      setErrorMessage("email-invalid");
      return;
    }
		if (!message) return setErrorMessage("message-error");

		setSending(true);

		await emailjs
			.send(
				import.meta.env.VITE_REACT_EMAILJS_SERVICE_ID ?? "",
				import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID ?? "",
				templateParams,
				import.meta.env.VITE_REACT_EMAILJS_USER_ID
			)
			.then(() => {
				console.log("Email sent successfully.");
				setStatus(true);
			})
			.catch((error) => {
				console.error(error);
			});

		setName("");
		setEmail("");
		setMessage("");
		console.log("Message sent!");
		setSending(false);
    setErrorMessage("");
	};

	return (
		<section className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Contact Us
					</h1>
					<p className="mt-4 text-lg leading-6 text-gray-500">
						Get in touch for a quote or any questions about our services
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-white text-gray-700 rounded-lg shadow-lg p-8 border border-gray-200">
						<form className="grid grid-cols-1 gap-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<div className="mt-1 ">
									<input
										type="text"
										name="name"
										id="name"
										value={name}
										autoComplete="name"
                    placeholder="your name"
										onChange={(e) => setName(e.target.value)}
										className="border outline-blue-500 py-3 px-4 block w-full rounded-md"
									/>
									{errorMessage === "name-error" && (
										<p
											className="text-md text-red-600"
											role="alert"
											aria-live="polite"
										>
											Name is required
										</p>
									)}
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										value={email}
										autoComplete="email"
                    placeholder="your email"
										onChange={(e) => setEmail(e.target.value)}
										className="border-1 outline-blue-500 py-3 px-4 block w-full  rounded-md"
									/>
									{errorMessage === "email-error" ? (
										<p
											className="text-md text-red-600"
											role="alert"
											aria-live="polite"
										>
											Email is required
										</p>
									) : errorMessage === "email-invalid" ? (<p
                    className="text-md text-red-600"
                    role="alert"
                    aria-live="polite"
                  >
                    Invalid email address
                  </p>) : null }
								</div>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									Message
								</label>
								<div className="mt-1">
									<textarea
										id="message"
										name="message"
										value={message}
                    placeholder="your message"
										onChange={(e) => setMessage(e.target.value)}
										rows={4}
										className="border outline-blue-500 py-3 px-4 block w-full border-gray-500 rounded-md"
									/>
									{errorMessage === "message-error" && (
										<p
											className="text-md text-red-600"
											role="alert"
											aria-live="polite"
										>
											Message is required
										</p>
									)}
								</div>
							</div>
							<div>
								{sending ? (
									<button
										disabled
										type="submit"
                    className="w-full bg-gray-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
									>
										<LoaderCircle
											className="me-2 animate-spin"
											size={16}
											strokeWidth={2}
											aria-hidden="true"
										/>
										Sending
									</button>
								) : (
									<button
										type="submit"
										className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md cursor-pointer"
										onClick={sendEmail}
									>
										Send
									</button>
								)}
							</div>

							{status && (
								<p className="bg-green-100 text-green-700 text-center p-4 mt-4 rounded-lg">
									Message sent successfully!
								</p>
							)}
						</form>
					</div>

					{/* Map */}
					<div className="bg-white rounded-lg p-8">
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							Our Location
						</h2>
						<div className="mt-4 text-gray-600 flex flex-col gap-4">
							<div className="font-medium flex flex-row gap-2 items-center">
								<MapPin size={20} className="min-w-[20px] min-h-[20px]"/>
								<p>Grand Terrace Subdivision, Consolacion, Cebu, Philippines</p>
							</div>
							<div className="font-medium flex flex-row gap-2 items-center">
								<Phone size={20} className="min-w-[20px] min-h-[20px]"/> <p>09123456789</p>
							</div>
						</div>
						<div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden mt-5">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.3000030706187!2d123.94505429985468!3d10.37383231399099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a29c0d36dcad%3A0x1d8d5ddf9cdfe7c2!2sGrand%20Terrace%20Subdivision%2C%20Consolacion%2C%20Cebu!5e0!3m2!1sen!2sph!4v1737352692754!5m2!1sen!2sph"
								width="500"
								height="300"
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
