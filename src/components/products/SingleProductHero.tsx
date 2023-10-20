import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const SingleProductHero = () => {
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
                        <h2>MSI MPG Trident 3</h2>
                        <p>
                            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060
                            SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10
                            Home, Gaming Keyboard and Mouse 3 Years Warranty
                            Gaming Desktop
                        </p>
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
                            <SwiperSlide>
                                <div
                                    className="thumbnail"
                                    style={{
                                        backgroundImage: `url(../../src/assets/images/products/product-1.png)`,
                                    }}
                                ></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="thumbnail"
                                    style={{
                                        backgroundImage: `url(../../src/assets/images/products/product-1.png)`,
                                    }}
                                ></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="thumbnail"
                                    style={{
                                        backgroundImage: `url(../../src/assets/images/products/product-1.png)`,
                                    }}
                                ></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductHero;
