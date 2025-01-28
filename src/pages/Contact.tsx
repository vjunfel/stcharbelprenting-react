import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactMap from "../components/ContactMap";

const Contact: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [sending, setSending] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [status, setStatus] = useState<boolean | null>(null);

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const templateParams = {
		from_name: email,
		to_name: "StCharbel Printing",
		phone,
		message,
	};

	const sendEmail = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();

		if (!name) return setErrorMessage("name-error");
		if (!phone) return setErrorMessage("phone-error");
		if (!email) return setErrorMessage("email-error");
		if (!emailRegex.test(email)) {
			setErrorMessage("email-invalid");
			return;
		}
		if (!message) return setErrorMessage("message-error");

		setSending(true);

		emailjs
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
				console.error("Failed...", error);
			});

		setName("");
		setEmail("");
		setPhone("");
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
					<div className="bg-white text-gray-700 rounded-lg shadow-lg p-8 border border-gray-200">
						{status && (
							<p className="bg-green-100 text-green-700 text-center p-4 mb-4 rounded-lg">
								Message sent successfully!
							</p>
						)}

						{/* Contact Form */}
						<form className="grid grid-cols-1 gap-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name<span className="text-red-500">*</span>
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
							<div className="space-y-2">
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-700"
								>
									Phone<span className="text-red-500">*</span>
								</label>
								<input
									id="phone"
									placeholder="0900-123-4567"
									type="number"
									required
									name="phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="border outline-blue-500 py-3 px-4 block w-full rounded-md"
								/>
								{errorMessage === "phone-error" && (
									<p
										className="mt-2 text-xs text-destructive"
										role="alert"
										aria-live="polite"
									>
										Phone is required
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email<span className="text-red-500">*</span>
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
									) : errorMessage === "email-invalid" ? (
										<p
											className="text-md text-red-600"
											role="alert"
											aria-live="polite"
										>
											Invalid email address
										</p>
									) : null}
								</div>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									Message<span className="text-red-500">*</span>
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
										className="w-full bg-gray-700 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2"
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
										className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md cursor-pointer"
										onClick={sendEmail}
									>
										Send
									</button>
								)}
							</div>
						</form>
					</div>

					{/* Map */}
					<ContactMap />
				</div>
			</div>
		</section>
	);
};

export default Contact;
