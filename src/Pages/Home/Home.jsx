/* eslint-disable no-unused-vars */
import { CarouselWrapper } from "react-pretty-carousel";
import image1 from "./../../assets/rectangle-15.png";
import image2 from "./../../assets/rectangle-16.png";
import image3 from "./../../assets/rectangle-17.png";
import image4 from "./../../assets/rectangle-26.png";
import Card from "./../../components/Card";
import Slider from "../../components/Slider";
import "./Home.css";

const images = [
	{ src: image2, title: "Interior 1" },
	{ src: image1, title: "Interior 2" },
	{ src: image3, title: "Interior 3" },
	{ src: image1, title: "Interior 4" },
];

const Home = () => {
	return (
		<div className="max-w-screen-2xl mx-auto">
			<div>
				<div className="pb-16 flex items-center w-[95%]">
					<h2
						className="font-author font-semibold w-[60%] text-custom uppercase"
						style={{ lineHeight: "1.2" }}
					>
						Comprehensive Interior
						<strong> Design Services</strong>
					</h2>
				</div>
				<CarouselWrapper items={3} mode="gallery" showControls={true}>
					{images.map((image, index) => (
						<div key={index} className="carousel-item">
							<img
								src={image.src}
								alt={`image${index + 1}`}
								className="carousel-image"
							/>
							<p className="carousel-title text-black">
								{image.title}
							</p>
						</div>
					))}
				</CarouselWrapper>
			</div>
			<div>
				<div className="pb-16 flex items-center w-[70%] mt-14">
					<h2 className="font-author font-bold w-[70%] text-5xl uppercase">
						Quality full medical services for patients
					</h2>
				</div>
				<div className="carousel w-full h-[720px]">
					<div
						id="slide1"
						className="carousel-item relative w-full h-[500px] gap-10"
					>
						<img src={image1} className="w-[70%] rounded-xl" />
						<Card
							icon="genderAndrogyne"
							title="Cardiology"
							description="Pharmacies are committed to making health care accessible and affordable for all. They emphasize the importance of health checkups."
							additionalText="More about checkup"
							slideNumber={1}
						/>
						<Card
							icon="medicalOutline"
							title="Neurology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<Card
							icon="luBrain"
							title="Gynecology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
							<a href="#slide4" className="btn btn-circle mr-5">
								❮
							</a>
							<a href="#slide2" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div
						id="slide2"
						className="carousel-item relative w-full h-[500px] gap-10"
					>
						<img src={image2} className="w-[70%] rounded-xl" />
						<Card
							icon="genderAndrogyne"
							title="Cardiology"
							description="Pharmacies are committed to making health care accessible and affordable for all. They emphasize the importance of health checkups."
							additionalText="More about checkup"
							slideNumber={2}
						/>
						<Card
							icon="medicalOutline"
							title="Neurology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<Card
							icon="luBrain"
							title="Gynecology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
							<a href="#slide1" className="btn btn-circle mr-5">
								❮
							</a>
							<a href="#slide3" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div
						id="slide3"
						className="carousel-item relative w-full h-[500px] gap-10"
					>
						<img src={image3} className="w-[70%] rounded-xl" />
						<Card
							icon="genderAndrogyne"
							title="Cardiology"
							description="Pharmacies are committed to making health care accessible and affordable for all. They emphasize the importance of health checkups."
							additionalText="More about checkup"
							slideNumber={3}
						/>
						<Card
							icon="medicalOutline"
							title="Neurology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<Card
							icon="luBrain"
							title="Gynecology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
							<a href="#slide2" className="btn btn-circle mr-5">
								❮
							</a>
							<a href="#slide4" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div
						id="slide4"
						className="carousel-item relative w-full h-[500px] gap-10"
					>
						<img src={image4} className="w-[30%] rounded-xl" />
						<Card
							icon="genderAndrogyne"
							title="Cardiology"
							description="Pharmacies are committed to making health care accessible and affordable for all. They emphasize the importance of health checkups."
							additionalText="More about checkup"
							slideNumber={4}
						/>
						<Card
							icon="medicalOutline"
							title="Neurology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<Card
							icon="luBrain"
							title="Gynecology"
							description="Pharmacies are committed to making health care accessible vulputate."
						/>
						<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
							<a href="#slide3" className="btn btn-circle mr-5">
								❮
							</a>
							<a href="#slide1" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className="pb-16 w-[95%]">
					<h2
						className="font-author font-semibold w-[60%] uppercase text-custom"
						style={{ lineHeight: "1.2" }}
					>
						Our Works of Art:
						<strong> Unfolding Design stories</strong>
					</h2>
					<p className="font-medium text-lg mb-4 pt-3 w-[40%]">
						Solli lobortis risus eget iaculis tincidunt placerat
						neque nisi. Aliquam at nibh mauris facilisis in sed
						aliquet. Feugiat massa mollis commodo sed sagittis
						vestibulum libero diam id.
					</p>
				</div>
				<Slider />
			</div>
		</div>
	);
};

export default Home;
