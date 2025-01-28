import { useState, useEffect, useRef, useCallback } from "react";

interface ImageSliderProps {
	images: string[];
	autoSlideInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
	images,
	autoSlideInterval = 3000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startPos, setStartPos] = useState(0);
	const [currentTranslate, setCurrentTranslate] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	}, [images.length]);

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	// Auto-slide effect
	useEffect(() => {
		const slideTimer = setInterval(() => {
			if (!isDragging) {
				nextSlide();
			}
		}, autoSlideInterval);

		return () => clearInterval(slideTimer);
	}, [isDragging, autoSlideInterval, nextSlide]);

	// Drag handlers
	const handleDragStart = (
		e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
	) => {
		setIsDragging(true);
		const pos = "touches" in e ? e.touches[0].clientX : e.clientX;
		setStartPos(pos);
	};

	const handleDragMove = (
		e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
	) => {
		if (!isDragging) return;
		const currentPos = "touches" in e ? e.touches[0].clientX : e.clientX;
		const translate = currentPos - startPos;
		setCurrentTranslate(translate);
	};

	const handleDragEnd = () => {
		setIsDragging(false);
		const movedBy = currentTranslate;

		if (Math.abs(movedBy) > 100) {
			// Threshold for slide change
			if (movedBy > 0) {
				prevSlide();
			} else {
				nextSlide();
			}
		}

		setCurrentTranslate(0);
	};

	return (
		<div className="bg-gray-50 w-full mx-auto h-auto flex flex-col justify-center pb-20">
			<div className="relative max-w-3xl mx-auto w-full">
				{/* Image container */}
				<div
					ref={sliderRef}
					className="relative h-[400px] w-full cursor-grab active:cursor-grabbing"
					onMouseDown={handleDragStart}
					onMouseMove={handleDragMove}
					onMouseUp={handleDragEnd}
					onMouseLeave={handleDragEnd}
					onTouchStart={handleDragStart}
					onTouchMove={handleDragMove}
					onTouchEnd={handleDragEnd}
				>
					<img
						src={images[currentIndex]}
						alt={`Slide ${currentIndex + 1}`}
						className="absolute w-full h-full object-cover md:rounded-lg"
						style={{
							transform: `translateX(${currentTranslate}px)`,
							transition: isDragging
								? "none"
								: "transform 0.3s ease-out",
						}}
						draggable="false"
					/>
				</div>

				{/* Navigation buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>

				{/* Dots indicator */}
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full transition-all ${
								index === currentIndex
									? "bg-white scale-125"
									: "bg-white/50"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
