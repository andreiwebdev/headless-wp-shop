import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "../layout/Skeleton";
import Breadcrumbs from "../common/Breadcrumbs";

const SingleProductHero = React.lazy(
    () => import("../products/SingleProductHero")
);
const ProductBanner = React.lazy(() => import("../products/ProductBanner"));
const FaqsSection = React.lazy(() => import("../common/FaqsSection"));
const ProductFeaturesSection = React.lazy(
    () => import("../products/ProductFeaturesSection")
);

type Product = {
    id: string;
    slug: string;
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
                id
                content
                title
                slug
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

    const { loading, data } = useQuery(GET_PRODUCT);

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

    return (
        <>
            <Breadcrumbs />
            <Suspense fallback={<Skeleton type="page" />}>
                <SingleProductHero
                    id={productData?.id}
                    slug={productData?.slug}
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
            </Suspense>
        </>
    );
};

export default SingleProduct;
