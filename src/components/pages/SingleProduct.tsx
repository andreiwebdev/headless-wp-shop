import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FaqsSection from "../common/FaqsSection";
import ProductBanner from "../products/ProductBanner";
import ProductFeaturesSection from "../products/ProductFeaturesSection";
import SingleProductHero from "../products/SingleProductHero";
import { gql, useQuery } from "@apollo/client";

type Product = {
    title: string;
    content: string;
};

type ProductFields = {
    productPrice: string;
    productImages: [];
    bannerTitle: string;
    bannerText: string;
    bannerImage: any;
    faqs: [];
    featureTitle: string;
    featureText: string;
    features: [];
};

const SingleProduct: React.FC = () => {
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

    const { loading, error, data } = useQuery(GET_PRODUCT);

    const [productData, setProductData] = useState<Product | null>(null);
    const [productFields, setProductFields] = useState<ProductFields | null>(
        null
    );

    useEffect(() => {
        if (!loading && data) {
            const productData = data?.productBy;
            const productFields = data?.productBy?.singleProduct;
            setProductData(productData);
            setProductFields(productFields);
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <>
            <SingleProductHero
                title={productData?.title}
                content={productData?.title}
                price={productFields?.productPrice}
                productImages={productFields?.productImages}
            />
            <ProductBanner
                title={productFields?.bannerTitle}
                text={productFields?.bannerText}
                imageUrl={productFields?.bannerImage?.sourceUrl}
            />
            <FaqsSection faqs={productFields?.faqs} />
            <ProductFeaturesSection
                title={productFields?.featureTitle}
                text={productFields?.featureText}
                features={productFields?.features}
            />
        </>
    );
};

export default SingleProduct;
