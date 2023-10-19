import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductInCol from "./ProductInCol";
import { Pagination } from "swiper/modules";

const ProductsSlider = () => {
    const sliderOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            dynamicBullets: true,
        },
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
                slidesPerView: 6,
            },
        },
    };

    const products = [
        {
            key: "1",
            imageId: "1",
            inStock: true,
        },
        {
            key: "2",
            imageId: "2",
            inStock: false,
        },
        {
            key: "3",
            imageId: "3",
            inStock: true,
        },
        {
            key: "4",
            imageId: "4",
            inStock: true,
        },
        {
            key: "5",
            imageId: "3",
            inStock: false,
        },
        {
            key: "6",
            imageId: "2",
            inStock: true,
        },
        {
            key: "7",
            imageId: "1",
            inStock: true,
        },
        {
            key: "8",
            imageId: "2",
            inStock: false,
        },
        {
            key: "9",
            imageId: "3",
            inStock: true,
        },
        {
            key: "10",
            imageId: "4",
            inStock: true,
        },
        {
            key: "11",
            imageId: "3",
            inStock: false,
        },
        {
            key: "12",
            imageId: "2",
            inStock: true,
        },
    ];

    return (
        <Swiper modules={[Pagination]} {...sliderOptions} className="slider-1">
            {products.map((product) => (
                <SwiperSlide key={product.key}>
                    <ProductInCol
                        inStock={product.inStock}
                        imageId={product.imageId}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductsSlider;
