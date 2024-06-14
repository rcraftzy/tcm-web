import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { VanishingStripes } from "./Backgrounds/VanishingStripes";
import { RainbowVortex } from "./Backgrounds/RainbowVortex";
import { BermudaSquare } from "./Backgrounds/BermudaSquare";
import { STOREPAGE_URL } from "../config";

const Slider = () => {
	return (
		<Swiper
			effect={"fade"}
			spaceBetween={0}
			centeredSlides={true}
			loop={true}
			autoplay={{
				delay: 5500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, Navigation, EffectFade]}
		>
			<SwiperSlide className="bg-black">
				<div className="w-full relative">
					<div className="w-full h-[660px] md:h-80">
						<VanishingStripes className="object-cover h-[864px]" />
					</div>
					<div className="absolute z-10 top-0 w-full">
						<section className="flex items-center md:items-start md:justify-between flex-col md:flex-row mx-20 md:ml-24 md:mr-14">
							<div className="md:mt-20 mt-10">
								<header>
									<h2 className="font-exo font-bold text-white text-center md:text-left text-5xl">
										<span className="block">Precalentadora</span>
										<span>D-Heater Pro V2</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL + "/products/precalentadora-d-heater-v2"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="flex">
								<img
									src="/images/products/precalentadora1.webp"
									className="h-96 md:h-80"
									alt="precalentadora"
								/>
								<img
									src="/images/products/precalentadora2.webp"
									className="h-96 md:h-80"
									alt="precalentadora"
								/>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="bg-white">
				<div className="w-full relative">
					<div className="w-full h-[660px] md:h-80">
						<img
							alt="background"
							src="/images/backgrounds/parabolic-ellipse.png"
							className="object-cover object-top h-[900px]"
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-24 md:mr-0">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-exo font-bold text-white text-center md:text-left text-8xl">
										<span className="block">CNC</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL + "/products/precalentadora-d-heater-v2"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute mb-14 md:mb-6">
										<img
											src="/images/products/CNC.webp"
											className="h-80 md:h-64 z-30"
											alt="cnc"
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="bg-white">
				<div className="w-full relative">
					<div className="w-full h-[660px] md:h-80">
						<RainbowVortex className="h-[660px] w-[1300px] object-cover object-top" />
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-24 md:mr-0">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-exo font-bold text-white text-center md:text-left text-5xl">
										<span className="block">LCD PARA</span>
										<span className="block">ZTE BLADE V4</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL + "/products/precalentadora-d-heater-v2"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6">
										<img
											src="/images/products/P4.webp"
											className="h-80 md:h-52 z-30 brightness-0"
											alt="lcd para zte blade v4"
										/>
									</div>
									<div className="absolute mr-28 md:mr-16">
										<img
											src="/images/products/P3.webp"
											className="h-80 md:h-52 z-40"
											alt="lcd para zte blade v4"
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full relative h-[660px] md:h-80">
					<div className="w-full">
						<BermudaSquare className="object-cover object-center h-[864px]" />
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-24 md:mr-7">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-exo font-bold text-white text-center md:text-left text-5xl">
										<span className="block">Touch Microsoft</span>
										<span>Surface Pro 3</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL +
												"/products/touch-para-microsoft-surface-pro-3-1631"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6">
										<img
											src="/images/products/P1.webp"
											className="h-80 md:h-52 z-30"
											alt="touchsurface3pro"
										/>
									</div>
									<div className="absolute mr-28 md:mr-16">
										<img
											src="/images/products/P2.webp"
											className="h-80 md:h-52 z-40"
											alt="touchsurface3pro"
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full relative">
					<div className="w-full h-[660px] md:h-80">
						<img
							alt="background"
							src="/images/backgrounds/quantum-gradient.png"
							className="object-cover object-top h-[900px]"
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-24 md:mr-7">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-exo font-bold text-white text-center md:text-left text-5xl">
										<span className="block">LCD LENOVO</span>
										<span>TAB M10</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL + "/products/precalentadora-d-heater-v2"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6 brightness-75 saturate-50 contrast-200">
										<img
											src="/images/products/P6.webp"
											className="h-80 md:h-56"
											alt="touchsurface3pro"
										/>
									</div>
									<div className="absolute mr-28 md:mr-16 brightness-125 contrast-200 saturate-50">
										<img
											src="/images/products/P5.webp"
											className="h-80 md:h-56"
											alt="touchsurface3pro"
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperNavButton />
		</Swiper>
	);
};

export default Slider;
