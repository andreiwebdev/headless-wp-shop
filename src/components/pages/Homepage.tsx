import React, { Suspense, useEffect, useState } from "react";
import BlogPostsSection from "../blog/BlogPostsSection";
import BrandsBanner from "../common/BrandsBanner";
import HeroSlider from "../common/HeroSlider";
import ProductsSliderSection from "../products/ProductsSliderSection";
import ProductsTabsSection from "../products/ProductsTabsSection";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "../layout/Skeleton";

const Testimonials = React.lazy(() => import("../common/Testimonials"));

const Homepage = () => {
    const GET_HP_FIELDS = gql`
        query homepageFields {
            page(id: "108", idType: DATABASE_ID) {
                id
                homepageFields {
                    testimonials {
                        testimonials {
                            testimonial
                            client
                        }
                    }
                }
            }
        }
    `;

    const [testimonials, setTestimonials] = useState([]);

    const { loading, data } = useQuery(GET_HP_FIELDS);

    useEffect(() => {
        if (!loading && data) {
            const fields = data?.page?.homepageFields;
            const testimonials = fields?.testimonials?.testimonials;
            setTestimonials(testimonials);
        }
    }, [loading, data]);

    return (
        <>
            <HeroSlider />
            <ProductsSliderSection />
            <ProductsTabsSection />
            <BrandsBanner />
            <BlogPostsSection />
            <Suspense fallback={<Skeleton type="rectangle" />}>
                <Testimonials testimonials={testimonials} />
            </Suspense>
        </>
    );
};

export default Homepage;
