import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {
    hideNav: () => void;
    setIsVisible: Function;
    isVisible: boolean;
    isSearchOpen: boolean;
};

type Product = {
    id: string;
    slug: string;
    title: string;
    singleProduct: any;
};

const NavSearch = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const SEARCH_QUERY = gql`
        query products {
            products(where: { search: "${searchTerm}" }, first: 10) {
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
        }
    `;

    const { loading, data } = useQuery(SEARCH_QUERY);
    const [products, setProducts] = useState([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const redirectHandler = () => {
        props.setIsVisible(false);
        setSearchTerm("");
        props.hideNav();
    };

    useEffect(() => {
        if (!loading) {
            const response = data?.products?.nodes;
            setProducts(response);
        }
    }, [data, loading]);

    useEffect(() => {
        if (!props.isSearchOpen) {
            setSearchTerm("");
        }
    }, [props.isSearchOpen]);

    return (
        <>
            <div
                className={props.isVisible ? "form--1 open" : "form--1 closed"}
            >
                <input
                    type="text"
                    placeholder="Search entiere store here..."
                    className="search-input"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <input type="submit" className="submit-input" value="" />
                <BiSearch />
                {products?.length >= 1 && searchTerm?.length >= 1 && (
                    <div className="nav-search-results">
                        {products.map((product: Product) => (
                            <Link
                                to={`/products/${product.slug}`}
                                key={product.id}
                                className="product-ctn"
                                onClick={redirectHandler}
                            >
                                <div className="row">
                                    <div className="col-2 col-md-2">
                                        <div
                                            style={{
                                                backgroundImage: `url(${product?.singleProduct?.productImages[0]?.image?.sourceUrl})`,
                                            }}
                                            className="product-image"
                                        ></div>
                                    </div>
                                    <div className="col-6 col-md-8">
                                        <h5>{product.title}</h5>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="price">
                                            $
                                            {
                                                product?.singleProduct
                                                    ?.productPrice
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavSearch;
