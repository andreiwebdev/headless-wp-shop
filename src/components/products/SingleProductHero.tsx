import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type Props = {
    title: string;
    content: string;
    price: string;
    productImages: [];
};

const SingleProductHero = (props: Props) => {
    const sliderOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            dynamicBullets: true,
        },
    };
    return (
        <div className="single-product-hero container">
            <div className="row">
                <div className="col-md-6">
                    <div className="product-info">
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                        <h3 className="mb-4">${props.price}</h3>
                        <div className="btn btn--2">Add To Cart</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-images">
                        <Swiper
                            modules={[Pagination]}
                            {...sliderOptions}
                            className="single-product-slider"
                        >
                            {props.productImages?.map((imageURL: any, key) => (
                                <SwiperSlide key={key}>
                                    <div
                                        className="thumbnail"
                                        style={{
                                            backgroundImage: `url(${imageURL?.image?.sourceUrl})`,
                                        }}
                                    ></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductHero;
