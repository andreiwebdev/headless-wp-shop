import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
    const slides = [
        {
            id: "1",
        },
        {
            id: "2",
        },
        {
            id: "3",
        },
    ];

    return (
        <div className="container">
            <Swiper className="hero-slider hero-slider--1">
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        style={{
                            backgroundImage: `url(../src/assets/images/hero/hero-${slide.id}.png)`,
                        }}
                    >
                        <div className="overlay">
                            <div className="content">
                                <h1>Discover our products</h1>
                                <a href="#" className="btn btn--2">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
