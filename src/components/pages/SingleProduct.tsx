import { useParams } from "react-router-dom";
import FaqsSection from "../common/FaqsSection";
import ProductBanner from "../products/ProductBanner";
import ProductFeaturesSection from "../products/ProductFeaturesSection";
import SingleProductHero from "../products/SingleProductHero";
import { gql, useQuery } from "@apollo/client";

const SingleProduct = () => {
    const { slug } = useParams();

    const GET_PRODUCT = gql`
        query getProduct {
            productBy(
                slug: "${slug}"
            ) {
                content
                title
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
                        image {
                            sourceUrl
                        }
                        text
                    }
                    isAvailable
                    productImages {
                        image {
                            sourceUrl
                        }
                    }
                    productPrice
                    productRating
                }
            }
        }
    `;

    const { data } = useQuery(GET_PRODUCT);

    // console.log(data.productBy);

    return (
        <>
            <SingleProductHero
                title={data?.productBy?.title}
                content={data?.productBy?.title}
                price={data?.productBy?.singleProduct?.productPrice}
                productImages={data?.productBy?.singleProduct?.productImages}
            />
            <ProductBanner
                title={data?.productBy?.singleProduct?.bannerTitle}
                text={data?.productBy?.singleProduct?.bannerText}
                imageUrl={
                    data?.productBy?.singleProduct?.bannerImage?.sourceUrl
                }
            />
            <FaqsSection faqs={data?.productBy?.singleProduct?.faqs} />
            <ProductFeaturesSection
                title={data?.productBy?.singleProduct?.featureTitle}
                text={data?.productBy?.singleProduct?.featureText}
                features={data?.productBy?.singleProduct?.features}
            />
        </>
    );
};

export default SingleProduct;
