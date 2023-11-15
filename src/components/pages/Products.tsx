import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Breadcrumbs from "../common/Breadcrumbs";
import ProductInCol from "../products/ProductInCol";
import { FaThList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import ProductsFiltersSidebar from "../products/ProductsFiltersSidebar";
import ProductItemList from "../products/ProductItemList";
import LoadingSpiner from "../common/LoadingSpiner";

type Product = {
    id: string;
    slug: string;
    title: string;
    singleProduct: [];
};

const Products = () => {
    const GET_PRODUCTS_DATA = gql`
        query allProducts {
            products {
                nodes {
                    singleProduct {
                        productImages {
                            image {
                                sourceUrl
                            }
                        }
                        productPrice
                        productRating
                        isAvailable
                    }
                    id
                    slug
                    title
                    terms {
                        nodes {
                            name
                        }
                    }
                }
            }
            brands {
                nodes {
                    name
                    id
                }
            }
        }
    `;
    const { loading, data } = useQuery(GET_PRODUCTS_DATA);
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState<any>([]);
    const [cardView, setCardView] = useState(false);

    useEffect(() => {
        if (!loading && data) {
            const productsResp = data?.products?.nodes;
            const brandsResp = data?.brands?.nodes;
            setProducts(productsResp);
            setBrands(brandsResp);
        }
    }, [loading, data]);

    const filterByBrand = (brandName: any) => {
        if (!loading && data) {
            const filteredProducts = data.products.nodes.filter(
                (product: any) =>
                    product.terms.nodes.some(
                        (term: any) => term.name === brandName
                    )
            );
            setProducts(filteredProducts);
        }
    };

    const resetFilter = () => {
        if (!loading && data) {
            setProducts(data.products.nodes);
        }
    };

    if (loading) return <LoadingSpiner />;

    return (
        <>
            <Breadcrumbs />
            <div className="container products-page">
                <h1>All Products</h1>
                <p className="mb-3 mb-md-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto est delectus officiis quam quae odit, iure ratione
                    tempora. Similique animi ipsam aspernatur ab veniam
                    deleniti, nam mollitia quibusdam hic ea eius rem officia
                    dicta iure repellendus molestiae asperiores a itaque.
                </p>
                <div className="row">
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <ProductsFiltersSidebar
                            onBrandSelect={filterByBrand}
                            brands={brands}
                            resetFilter={resetFilter}
                        />
                    </div>
                    <div className="col-lg-9">
                        <div className="mobile-buttons mb-4">
                            <div className="row">
                                <div className="col-5 col-sm-3 d-lg-none">
                                    <div className="btn btn--1">Filters</div>
                                </div>
                                <div className="col-5 col-sm-3 col-xl-2">
                                    {/* <div className="btn btn--1">
                                        Sort by: Price <FaAngleDown />
                                    </div> */}
                                </div>
                                <div className="col-2 col-sm-6 col-lg-9 col-xl-10">
                                    <div
                                        className="list-grid"
                                        onClick={() => setCardView(!cardView)}
                                    >
                                        {cardView && <BsFillGridFill />}
                                        {!cardView && <FaThList />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {products?.map((product: Product) =>
                                cardView ? (
                                    <div
                                        key={product.id}
                                        className="col-sm-6 col-lg-4 col-xl-3 mb-3"
                                    >
                                        <ProductInCol
                                            slug={product.slug}
                                            title={product.title}
                                            fields={product.singleProduct}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        key={product.id}
                                        className="col-12 mb-3"
                                    >
                                        <ProductItemList
                                            slug={product.slug}
                                            title={product.title}
                                            fields={product.singleProduct}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        {products?.length < 1 && (
                            <h3 style={{ textAlign: "center" }}>
                                No Products Found 🤓
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
