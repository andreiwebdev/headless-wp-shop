import { ImQuotesLeft } from "react-icons/im";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type Props = {
    testimonials: any;
};

type Testimonial = {
    testimonial: string;
    client: string;
};

const Testimonials = (props: Props) => {
    const sliderOptions = {
        autoplay: {
            delay: 3000,
        },
        pagination: true,
        slidesPerView: 1,
    };

    return (
        <div className="container">
            <Swiper
                modules={[Pagination]}
                {...sliderOptions}
                className="testimonials"
            >
                {props.testimonials?.map(
                    (testimonial: Testimonial, key: number) => (
                        <SwiperSlide key={key} className="testimonial">
                            <ImQuotesLeft />
                            <p className="text">{testimonial.testimonial}</p>
                            <p className="author">- {testimonial.client}</p>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default Testimonials;
