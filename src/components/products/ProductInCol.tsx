// icons
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";

type Props = {
    slug: string;
    title: string;
    fields: any;
    inStock: boolean;
};

const ProductInCol = (props: Props) => {
    let rating = [];
    for (let index = 1; index <= 5; index++) {
        if (index <= props.fields?.productRating) {
            rating.push("full");
        } else {
            rating.push("empty");
        }
    }

    return (
        <div className="product-in-col">
            {props.fields?.isAvailable ? (
                <div className="product-avaiable in-stock">
                    <AiFillCheckCircle />
                    <span>in stock</span>
                </div>
            ) : (
                <div className="product-avaiable need-check">
                    <CgUnavailable />
                    <span>check availability</span>
                </div>
            )}
            <Link to={`/products/${props.slug}`}>
                <div
                    className="product-image"
                    style={{
                        backgroundImage: `url(${props.fields?.productImages[0]?.image?.sourceUrl})`,
                    }}
                ></div>
            </Link>
            <div className="rating">
                <div className="stars">
                    {rating.map((type, key) => (
                        <AiFillStar key={key} className={type} />
                    ))}
                </div>
                <span>Reviews ({props.fields?.productRating})</span>
            </div>
            <a href="#">
                <h4>{props.title}</h4>
            </a>
            <div className="old-price">$1{props.fields?.productPrice}</div>
            <div className="price">${props.fields?.productPrice}</div>
            <button className="btn btn--2">Add to cart</button>
        </div>
    );
};

export default ProductInCol;
