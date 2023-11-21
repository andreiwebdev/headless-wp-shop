import { useState, useRef, useEffect } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NavCartItem from "./NavCartItem";
import { cartActions } from "../../store/slices/cart.slice";

const NavCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const totalItems = useSelector(
        (state: RootState) => state.cart.totalCartItems
    );

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            setIsCartOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={modalRef} className="cart d-none d-xl-block">
            {totalItems > 0 && <div className="notification">{totalItems}</div>}
            <AiOutlineShoppingCart onClick={() => setIsCartOpen(!isCartOpen)} />
            {isCartOpen && totalItems > 0 && (
                <div className="cart-items-ctn">
                    <div className="cart-header">
                        <h5>My Cart</h5>
                        {totalItems == 1 ? (
                            <h6>{totalItems} item in cart</h6>
                        ) : (
                            <h6>{totalItems} items in cart</h6>
                        )}
                        <div className="btn btn--1">View or Edit Your Cart</div>
                    </div>
                    <div className="cart-items">
                        {cartItems?.map((item, key) => (
                            <NavCartItem
                                key={key}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                imageUrl={item.image}
                                removeItem={() =>
                                    dispatch(
                                        cartActions.removeItemFromCart(item.id)
                                    )
                                }
                            />
                        ))}
                    </div>
                    <div className="cart-footer">
                        <h4>
                            Subtotal: <span>${totalPrice}</span>
                        </h4>
                        <div className="btn btn--2">Go to Checkout</div>
                    </div>
                </div>
            )}
            {isCartOpen && totalItems === 0 && (
                <div className="cart-items-ctn no-items">
                    <div className="cart-header">
                        <h6>No Items In Your Cart</h6>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavCart;
