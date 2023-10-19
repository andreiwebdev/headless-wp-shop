import { useState } from "react";

// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

// images
import ProductImage from "../../assets/images/products/product-1.png";

const NavActions = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <>
            <div className="nav-actions d-none d-xl-flex">
                {!isSearchOpen && (
                    <BiSearch onClick={() => setIsSearchOpen(!isSearchOpen)} />
                )}
                {isSearchOpen && (
                    <AiOutlineClose
                        className="close-searchbar"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    />
                )}
                <div className="cart">
                    <div className="notification">2</div>
                    <AiOutlineShoppingCart
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    />
                    {isCartOpen && (
                        <div className="cart-items-ctn">
                            <div className="cart-header">
                                <h5>My Cart</h5>
                                <h6>2 item in cart</h6>
                                <div className="btn btn--1">
                                    View or Edit Your Cart
                                </div>
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
                <div
                    className="profile"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                    {isProfileOpen && (
                        <div className="profile-card">
                            <ul>
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li>
                                    <a href="#">My Wish List (0)</a>
                                </li>
                                <li>
                                    <a href="#">Create an Account</a>
                                </li>
                                <li>
                                    <a href="#">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <form className={isSearchOpen ? "form--1 open" : "form--1 closed"}>
                <input
                    type="text"
                    placeholder="Search entiere store here..."
                    className="search-input"
                />
                <input type="submit" className="submit-input" value="" />
                <BiSearch />
            </form>
        </>
    );
};

export default NavActions;
