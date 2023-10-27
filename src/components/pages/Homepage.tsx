import { useEffect, useState } from "react";

import BlogPostsSection from "../blog/BlogPostsSection";
import BrandsBanner from "../common/BrandsBanner";
import HeroSlider from "../common/HeroSlider";
import Testimonials from "../common/Testimonials";
import ProductsSliderSection from "../products/ProductsSliderSection";
import ProductsTabsSection from "../products/ProductsTabsSection";
import { gql, useQuery } from "@apollo/client";

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

    const { loading, error, data } = useQuery(GET_HP_FIELDS);

    useEffect(() => {
        if (!loading && data) {
            const fields = data?.page?.homepageFields;
            const testimonials = fields?.testimonials?.testimonials;
            setTestimonials(testimonials);
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <HeroSlider />
            <ProductsSliderSection />
            <ProductsTabsSection />
            <BrandsBanner />
            <BlogPostsSection />
            <Testimonials testimonials={testimonials} />
        </>
    );
};

export default Homepage;
