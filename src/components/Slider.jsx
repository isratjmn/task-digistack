import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "./../assets/image-1.png";
import slider2 from "./../assets/rectangle-26.png";
import "swiper/css/pagination";
import "swiper/css";

const Slider = () => {
	return (
		<section className="my-20">
			<Swiper
				slidesPerView={2}
				spaceBetween={10}
				pagination={{ clickable: true }}
				className="mySwiper mb-20"
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
				}}
			>
				<SwiperSlide>
					<div>
						<img src={slider1} alt="img1" />
						<h3 className="text-xl uppercase text-white -mt-16 ps-4 md:ps-20">
							Smart living room interior design
						</h3>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={slider2}
							alt="img2"
							style={{ width: "70%", height: "auto" }}
						/>
						<h3 className="text-xl uppercase text-white -mt-16 ps-4 md:ps-20">
							Modern kitchen
						</h3>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src={slider1} alt="img1" />
						<h3 className="text-xl uppercase text-white -mt-16 ps-4 md:ps-20">
							Smart living room interior design
						</h3>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={slider2}
							alt="img2"
							style={{ width: "70%", height: "auto" }}
						/>
						<h3 className="text-xl uppercase text-white -mt-16 ps-4 md:ps-20">
							Modern kitchen
						</h3>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Slider;
