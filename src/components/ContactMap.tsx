import React from "react";
import { AtSign, MapPin, Phone } from "lucide-react";
import { BusinessInfo } from "../constant/data";

const ContactMap: React.FC = () => {
	return (
		<div className="bg-white rounded-lg p-8">
			<h2 className="text-xl font-semibold text-gray-900 mb-4">
				You can contact us directly via:
			</h2>
			<div className="mt-4 text-gray-600 flex flex-col gap-4">
				<div className="font-medium flex flex-row gap-2 items-center">
					<AtSign
						size={20}
						className="min-w-[20px] min-h-[20px]"
					/>
					<p>{BusinessInfo.email}</p>
				</div>
				<div className="font-medium flex flex-row gap-2 items-center">
					<Phone
						size={20}
						className="min-w-[20px] min-h-[20px]"
					/>
					<p>{BusinessInfo.phone}</p>
				</div>

				<div className="font-medium flex flex-row gap-2 items-center">
					<MapPin
						size={20}
						className="min-w-[20px] min-h-[20px]"
					/>
					<p>{BusinessInfo.address}</p>
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
	);
};

export default ContactMap;
