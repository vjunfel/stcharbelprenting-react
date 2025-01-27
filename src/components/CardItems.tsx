import React from "react";

interface CardItems {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
	name?: string;
	description?: string;
}

const CardItems: React.FC<CardItems> = ({
	src,
	alt,
	width,
	height,
	className,
	name,
	description,
}) => {
	return (
		<div className={className}>
      <div className="w-full h-[350px] object-cover overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full transition ease delay-100 duration-300 hover:scale-110"
        />
      </div>
			<div className="p-5 text-center flex flex-col justify-between">
				<h3 className="text-lg text-gray-700 font-bold mb-2">{name}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
};

export default CardItems;
