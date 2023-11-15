import HeadingWithLink from "../common/HeadingWithLink";
import ProductsSlider from "../products/ProductsSlider";

const ProductsSliderSection = () => {
    return (
        <div className="container">
            <HeadingWithLink
                heading="New Products"
                linkText="See All New Products"
                link="/products"
            />
            <ProductsSlider />
        </div>
    );
};

export default ProductsSliderSection;
