import { AiOutlineClose } from "react-icons/ai";

type Props = {
    title: string;
    price: string;
    imageUrl: string;
    quantity: number;
    removeItem: () => void;
};

const NavCartItem = (props: Props) => {
    return (
        <div className="cart-item">
            <h4>{props.quantity}x</h4>
            <img src={props.imageUrl} alt="" />
            <p>
                {props.title.slice(0, 13)}
                {"..."}
            </p>
            <div className="cart-actions">
                <div className="item">
                    <AiOutlineClose onClick={props.removeItem} />
                </div>
            </div>
        </div>
    );
};

export default NavCartItem;
