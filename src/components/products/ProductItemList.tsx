// icons
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/slices/cart.slice";

type Props = {
    id: string;
    slug: string;
    title: string;
    fields: any;
};

const ProductItemList = (props: Props) => {
    const dispatch = useDispatch();

    const addItemToCart = () => {
        let item = {
            id: props.id,
            title: props.title,
            slug: props.slug,
            price: props.fields?.productPrice,
            image: props.fields?.productImages[0]?.image?.sourceUrl,
            quantity: 1,
        };
        dispatch(cartActions.addItemToCart(item));
    };

    let rating = [];
    for (let index = 1; index <= 5; index++) {
        if (index <= props.fields?.productRating) {
            rating.push("full");
        } else {
            rating.push("empty");
        }
    }

    return (
        <div className="product-in-col product-item-list">
            <div className="row">
                <div className="col-12 col-md-3">
                    <Link to={`/products/${props.slug}`}>
                        <div
                            className="product-image"
                            style={{
                                backgroundImage: `url(${props.fields?.productImages[0]?.image?.sourceUrl})`,
                            }}
                        ></div>
                    </Link>
                </div>
                <div className="col-12 col-md-5">
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
                        <h4>{props.title}</h4>
                    </Link>
                    <div className="rating">
                        <div className="stars">
                            {rating.map((type, key) => (
                                <AiFillStar key={key} className={type} />
                            ))}
                        </div>
                        <span>Reviews ({props.fields?.productRating})</span>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        <div className="price">
                            ${props.fields?.productPrice}
                        </div>
                        <button onClick={addItemToCart} className="btn btn--2">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemList;
