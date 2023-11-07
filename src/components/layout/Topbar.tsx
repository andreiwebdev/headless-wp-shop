import { useState } from "react";

// icons
import { FaAngleDown } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-start">
                        <div className="shop-info-ctn justify-content-md-start">
                            <p className="d-flex align-items-center">
                                <span className="pr-2">Mon-Thu: </span>
                                9:00 AM - 5:30 PM
                                <FaAngleDown
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="fa-angle-down"
                                />
                            </p>
                            {isOpen && (
                                <div className="shop-info">
                                    <div className="row">
                                        <div className="col-3">
                                            <BiTime />
                                        </div>
                                        <div className="col-9">
                                            <h5>We are open:</h5>
                                            <p>
                                                <span>Mon-Thu:</span> 9:00 AM -
                                                5:30 PM
                                            </p>
                                            <p>
                                                <span>Fr:</span> 9:00 AM - 6:00
                                                PM
                                            </p>
                                            <p>
                                                <span>Sat:</span> 11:00 AM -
                                                5:00 PM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <LuMapPin />
                                        </div>
                                        <div className="col-9">
                                            <h5>
                                                Address: 1234 Street Adress,
                                                City Address, 1234
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p>
                                                Phone:{" "}
                                                <a href="#">(00) 1234 5678</a>
                                            </p>
                                            <p>
                                                E-mail:{" "}
                                                <a href="#">shop@email.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-6 d-none d-md-flex justify-content-md-center">
                        <span className="d-none d-lg-inline mr-lg-2">
                            Visit our showroom in 1234 Street Adress City
                            Address, 1234
                        </span>
                        <Link to="contact-us">Contact Us</Link>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 call-us d-none d-md-flex justify-content-md-end align-items-md-center">
                        <p>Call Us: (00) 1234 5678</p>
                        <a href="#">
                            <AiFillFacebook />
                        </a>
                        <a href="#">
                            <AiFillInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
