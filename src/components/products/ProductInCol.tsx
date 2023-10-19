// icons
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";

type Props = {
    imageId: string;
    inStock: boolean;
};

const ProductInCol = (props: Props) => {
    return (
        <div className="product-in-col">
            {props.inStock ? (
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
            <a href="#">
                <img
                    src={`../src/assets/images/products/product-${props.imageId}.png`}
                    alt="product"
                />
            </a>
            <div className="rating">
                <div className="stars">
                    <AiFillStar className="full" />
                    <AiFillStar className="full" />
                    <AiFillStar className="full" />
                    <AiFillStar className="full" />
                    <AiFillStar className="empty" />
                </div>
                <span>Reviews (4)</span>
            </div>
            <a href="#">
                <h4>MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h4>
            </a>
            <div className="old-price">$599.00</div>
            <div className="price">$499.00</div>
            <button className="btn btn--2">Add to cart</button>
        </div>
    );
};

export default ProductInCol;
