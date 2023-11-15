import { useState, useRef, useEffect } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";

import ProductImage from "../../assets/images/products/product-1.png";

const NavCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

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
        <div ref={modalRef} className="cart">
            <div className="notification">2</div>
            <AiOutlineShoppingCart onClick={() => setIsCartOpen(!isCartOpen)} />
            {isCartOpen && (
                <div className="cart-items-ctn">
                    <div className="cart-header">
                        <h5>My Cart</h5>
                        <h6>2 item in cart</h6>
                        <div className="btn btn--1">View or Edit Your Cart</div>
                    </div>
                    <div className="cart-items">
                        <div className="cart-item">
                            <h4>1x</h4>
                            <img src={ProductImage} alt="" />
                            <p>
                                EX DISPLAY : MSI Pro 16 Flex-036AU 15.6
                                MULTITOUCH All-In-On...
                            </p>
                            <div className="cart-actions">
                                <div className="item">
                                    <AiOutlineClose />
                                </div>
                                <div className="item">
                                    <MdOutlineModeEdit />
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <h4>1x</h4>
                            <img src={ProductImage} alt="" />
                            <p>
                                EX DISPLAY : MSI Pro 16 Flex-036AU 15.6
                                MULTITOUCH All-In-On...
                            </p>
                            <div className="cart-actions">
                                <div className="item">
                                    <AiOutlineClose />
                                </div>
                                <div className="item">
                                    <MdOutlineModeEdit />
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <h4>1x</h4>
                            <img src={ProductImage} alt="" />
                            <p>
                                EX DISPLAY : MSI Pro 16 Flex-036AU 15.6
                                MULTITOUCH All-In-On...
                            </p>
                            <div className="cart-actions">
                                <div className="item">
                                    <AiOutlineClose />
                                </div>
                                <div className="item">
                                    <MdOutlineModeEdit />
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <h4>1x</h4>
                            <img src={ProductImage} alt="" />
                            <p>
                                EX DISPLAY : MSI Pro 16 Flex-036AU 15.6
                                MULTITOUCH All-In-On...
                            </p>
                            <div className="cart-actions">
                                <div className="item">
                                    <AiOutlineClose />
                                </div>
                                <div className="item">
                                    <MdOutlineModeEdit />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-footer">
                        <h4>
                            Subtotal: <span>$499.00</span>
                        </h4>
                        <div className="btn btn--2">Go to Checkout</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavCart;
