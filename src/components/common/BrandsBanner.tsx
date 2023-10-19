import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandsBanner = () => {
    const sliderOptions = {
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 7,
            },
        },
    };

    const brands = [
        {
            image: "../../src/assets/images/brands/brand-1.png",
        },
        {
            image: "../../src/assets/images/brands/brand-2.png",
        },
        {
            image: "../../src/assets/images/brands/brand-3.png",
        },
        {
            image: "../../src/assets/images/brands/brand-4.png",
        },
        {
            image: "../../src/assets/images/brands/brand-5.png",
        },
        {
            image: "../../src/assets/images/brands/brand-6.png",
        },
        {
            image: "../../src/assets/images/brands/brand-7.png",
        },
    ];

    return (
        <div className="container">
            <Swiper className="brands-slider" {...sliderOptions}>
                {brands.map((brand, key) => (
                    <SwiperSlide key={key}>
                        <div
                            className="brand"
                            style={{ backgroundImage: `url(${brand.image})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandsBanner;
