import BlogPostsSection from "../blog/BlogPostsSection";
import BrandsBanner from "../common/BrandsBanner";
import HeroSlider from "../common/HeroSlider";
import Testimonials from "../common/Testimonials";
import ProductsSliderSection from "../products/ProductsSliderSection";
import ProductsTabsSection from "../products/ProductsTabsSection";

const Homepage = () => {
    const laptopTaxonomies = [
        {
            id: "gs",
            title: "MSI GS Series",
        },
        {
            id: "gt",
            title: "MSI GT Series",
        },
        {
            id: "gl",
            title: "MSI GL Series",
        },
        {
            id: "ge",
            title: "MSI GE Series",
        },
    ];
    const desktopTaxonomies = [
        {
            id: "infinute",
            title: "MSI Infinute Series",
        },
        {
            id: "triden",
            title: "MSI Triden",
        },
        {
            id: "gl",
            title: "MSI GL Series",
        },
        {
            id: "nightblade",
            title: "MSI Nightblade",
        },
    ];

    return (
        <>
            <HeroSlider />
            <ProductsSliderSection />
            {/* <ProductsTabsSection
                tabs={laptopTaxonomies}
                bannerTitle="MSI Laptops"
                bannerImageURL="../src/assets/images/banners/banner-1.png"
            />
            <ProductsTabsSection
                tabs={desktopTaxonomies}
                bannerTitle="Desktops"
                bannerImageURL="../src/assets/images/banners/banner-2.png"
            />
            <ProductsTabsSection
                tabs={[]}
                bannerTitle="Gaming Monitors"
                bannerImageURL="../src/assets/images/banners/banner-3.png"
            /> */}
            <BrandsBanner />
            <BlogPostsSection />
            <Testimonials />
        </>
    );
};

export default Homepage;
