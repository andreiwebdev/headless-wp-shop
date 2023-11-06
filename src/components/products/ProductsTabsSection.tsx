import React, { useState, useEffect, Suspense } from "react";
import Tabs from "../common/Tabs";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "../layout/Skeleton";

const BannerInCol = React.lazy(() => import("../common/BannerInCol"));
const ProductInCol = React.lazy(() => import("./ProductInCol"));

type Term = {
    name: string;
    id: string;
    uri: string;
    taxfields: any;
    products: any;
};

type Product = {
    id: string;
    slug: string;
    title: string;
    singleProduct: [];
};

const ProductsTabsSection = () => {
    const GET_TAX_PRODUCTS_TERMS = gql`
        query getProductsFromTaxAndTerms {
            taxonomy(id: "dGF4b25vbXk6YnJhbmQ") {
                id
                name
                connectedTerms {
                    nodes {
                        ... on Brand {
                            id
                            name
                            count
                            slug
                            uri
                            taxonomyName
                            products {
                                nodes {
                                    title
                                    id
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
                                            text
                                            image {
                                                sourceUrl
                                            }
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
                                    terms {
                                        nodes {
                                            name
                                        }
                                    }
                                }
                            }
                            taxfields {
                                image {
                                    sourceUrl
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    const { loading, data } = useQuery(GET_TAX_PRODUCTS_TERMS);

    const [terms, setTerms] = useState([]);
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        if (!loading && data) {
            const fetchedTerms = data?.taxonomy?.connectedTerms?.nodes;
            setTerms(fetchedTerms);
            if (fetchedTerms.length > 0) {
                setActiveTab(fetchedTerms[0].id);
            }
        }
    }, [loading, data]);

    const taxonomy = data?.taxonomy?.name;

    return (
        <div className="container products-tabs-section">
            <Tabs
                taxonomy={taxonomy}
                tabs={terms}
                activeTab={activeTab}
                setTab={setActiveTab}
            />
            {terms?.map(
                (term: Term) =>
                    term.id == activeTab && (
                        <div className="row" datatype={term.id} key={term.id}>
                            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                <Suspense fallback={<Skeleton type="card" />}>
                                    <BannerInCol
                                        title={term.name}
                                        uri={term.uri}
                                        bannerURL={
                                            term.taxfields?.image?.sourceUrl
                                        }
                                    />
                                </Suspense>
                            </div>
                            {term.products.nodes
                                .filter(
                                    (_product: any, index: number) => index < 5
                                )
                                .map((product: Product) => (
                                    <div
                                        key={product.id}
                                        className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"
                                    >
                                        <Suspense
                                            fallback={<Skeleton type="card" />}
                                        >
                                            <ProductInCol
                                                slug={product.slug}
                                                title={product.title}
                                                fields={product.singleProduct}
                                            />
                                        </Suspense>
                                    </div>
                                ))}
                        </div>
                    )
            )}
        </div>
    );
};

export default ProductsTabsSection;
