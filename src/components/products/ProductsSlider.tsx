import "swiper/css";
import "swiper/css/pagination";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "../layout/Skeleton";

const ProductInCol = React.lazy(() => import("./ProductInCol"));

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

    const GET_LATEST_PRODUCTS = gql`
        query latestProducts {
            products(last: 6) {
                nodes {
                    singleProduct {
                        bannerImage {
                            sourceUrl
                        }
                        bannerText
                        bannerTitle
                        faqs {
                            answer
                            question
                        }
                        featureText
                        featureTitle
                        features {
                            text
                            image {
                                sourceUrl
                            }
                        }
                        productImages {
                            image {
                                sourceUrl
                            }
                        }
                        productPrice
                        productRating
                        isAvailable
                    }
                    slug
                    title
                    id
                }
            }
        }
    `;

    const { data } = useQuery(GET_LATEST_PRODUCTS);

    return (
        <Swiper modules={[Pagination]} {...sliderOptions} className="slider-1">
            {data?.products?.nodes?.map((product: any, key: any) => (
                <SwiperSlide key={product.id || key}>
                    <Suspense fallback={<Skeleton type="card" />}>
                        <ProductInCol
                            id={product.id}
                            title={product.title}
                            slug={product.slug}
                            fields={product.singleProduct}
                        />
                    </Suspense>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductsSlider;
