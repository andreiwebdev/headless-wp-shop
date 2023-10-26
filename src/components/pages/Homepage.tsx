import BlogPostsSection from "../blog/BlogPostsSection";
import BrandsBanner from "../common/BrandsBanner";
import HeroSlider from "../common/HeroSlider";
import Testimonials from "../common/Testimonials";
import ProductsSliderSection from "../products/ProductsSliderSection";
import ProductsTabsSection from "../products/ProductsTabsSection";

const Homepage = () => {
    return (
        <>
            <HeroSlider />
            <ProductsSliderSection />
            <ProductsTabsSection />
            <BrandsBanner />
            <BlogPostsSection />
            <Testimonials />
        </>
    );
};

export default Homepage;
