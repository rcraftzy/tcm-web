import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PUBLICIDAD = [
	{
		url: "/images/publicidad/publicidad1.webp",
		name: "lampara",
	},
	{
		url: "/images/publicidad/publicidad2.webp",
		name: "boligrafo",
	},
	{
		url: "/images/publicidad/publicidad3.webp",
		name: "cubo-para-iphone",
	},
	{
		url: "/images/publicidad/publicidad4.webp",
		name: "cable-original",
	},
	{
		url: "/images/publicidad/publicidad5.webp",
		name: "celular-nokia",
	},
	{
		url: "/images/publicidad/publicidad6.webp",
		name: "celular-nokia",
	},
	{
		url: "/images/publicidad/publicidad7.webp",
		name: "celular-nokia",
	},
];

const Carousel = () => {
	return (
		<Swiper
			spaceBetween={0}
			centeredSlides={true}
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, Navigation, EffectCoverflow]}
			effect={"coverflow"}
			slidesPerView={2.6}
			coverflowEffect={{
				rotate: 0,
				stretch: 22,
				depth: 120,
				modifier: 1,
				slideShadows: true,
			}}
		>
			{PUBLICIDAD.map((data) => (
				<SwiperSlide key={data.url} className="w-full">
					<img src={data.url} loading="lazy" alt="thumbnail" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
