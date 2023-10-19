import { ImQuotesLeft } from "react-icons/im";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
    const sliderOptions = {
        autoplay: {
            delay: 3000,
        },
        pagination: true,
        slidesPerView: 1,
    };

    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi consequuntur assumenda tempore corrupti dolore perspiciatis incidunt ad aperiam ex?",
            author: "Tama Brown",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi consequuntur assumenda tempore corrupti dolore perspiciatis incidunt ad aperiam ex?",
            author: "Tama Brown",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi consequuntur assumenda tempore corrupti dolore perspiciatis incidunt ad aperiam ex?",
            author: "Tama Brown",
        },
    ];

    return (
        <Swiper
            modules={[Pagination]}
            {...sliderOptions}
            className="testimonials"
        >
            {testimonials.map((testimonial, key) => (
                <SwiperSlide className="testimonial">
                    <ImQuotesLeft />
                    <p className="text">{testimonial.text}</p>
                    <p className="author">- {testimonial.author}</p>
                    <a href="#" className="btn btn--1">
                        Leave Us A Review
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Testimonials;
