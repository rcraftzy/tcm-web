import { useSwiper } from "swiper/react";
import { ArrowIcon } from "./Icons/ArrowIcon";

export const SwiperNavButton = () => {
	const swiper = useSwiper();

	const handleClickPrev = () => {
		swiper.slidePrev();
		swiper.update();
	};

	const handleClickNext = () => {
		swiper.slideNext();
		swiper.update();
	};

	return (
		<div className="absolute inset-x-0 z-10 top-1/2">
			<button
        id="slide-prev"
				className="absolute z-20 left-3"
				onClick={() => swiper.slidePrev()}
			>
				<div className="w-9 p-1 rounded-2xl rotate-180 stroke-zinc-100 bg-zinc-900">
					<ArrowIcon />
				</div>
			</button>
			<button
        id="slide-next"
				className="absolute z-20 right-3"
				onClick={() => swiper.slideNext()}
			>
				<div className="w-9 p-1 rounded-2xl stroke-zinc-100 bg-zinc-900">
					<ArrowIcon />
				</div>
			</button>
		</div>
	);
};
