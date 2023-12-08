import {
	FaArrowLeft,
	FaArrowRight,
} from "react-icons/fa";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { sliderData } from "../ulit/Carousel";
import "./Slider.css";

const Slider = () => {
	const swiperRef = useRef(null);
	const nextBtn = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};
	const prevBtn = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};
	const [activeIndex, setActiveIndex] = useState(0);
	const handleSlideChange = () => {
		if (swiperRef.current) {
			setActiveIndex(swiperRef.current.swiper.realIndex);
		}
	};
	return (
		<div className="ourwork max-w-6xl">
			<Swiper
				ref={swiperRef}
				loop={true}
				speed={1000}
				modules={[Pagination]}
				slidesPerView={1}
				spaceBetween={10}
				breakpoints={{
					780: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1240: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				}}
				className="mySwiper"
				onSlideChange={handleSlideChange}
			>
				{sliderData?.map((item, index) => (
					<SwiperSlide key={item._id}>
						<div
							className="slider-item"
							style={{ background: "white" }}
						>
							<div className="mapCard">
								{activeIndex == index ? (
									<div className="activeCard">
										<div className="singleCard_image">
											<img
												className="w-[80%]"
												src={item?.image}
												alt="image1"
											/>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="58"
													height="58"
													viewBox="0 0 58 58"
													fill="none"
												>
													<path
														d="M16.917 41.0834L41.0837 16.9167"
														stroke="white"
														strokeWidth="5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M16.917 16.9167H41.0837V41.0834"
														stroke="white"
														strokeWidth="5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
										</div>
										<h1 className="font-bold mt-2">
											Smart living room interior design
										</h1>
									</div>
								) : (
									<div className="inActive">
										<div>
											<img src={item?.image} alt="" />
											<h1 className="font-bold mt-2">
												Modern kitchen
											</h1>
											<div className="arrowCard">
												<div
													className="inactiveIcon"
													onClick={nextBtn}
												>
													<FaArrowLeft size={28} />
												</div>
												<div
													onClick={prevBtn}
													className="activeIcon"
												>
													<FaArrowRight size={28} />
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
