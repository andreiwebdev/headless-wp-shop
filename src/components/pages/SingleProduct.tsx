import FaqsSection from "../common/FaqsSection";
import ProductBanner from "../products/ProductBanner";
import ProductFeaturesSection from "../products/ProductFeaturesSection";
import SingleProductHero from "../products/SingleProductHero";

const SingleProduct = () => {
    return (
        <>
            <SingleProductHero />
            <ProductBanner />
            <FaqsSection />
            <ProductFeaturesSection />
        </>
    );
};

export default SingleProduct;
