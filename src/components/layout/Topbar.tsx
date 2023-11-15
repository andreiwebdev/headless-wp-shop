// icons
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";
import ShopInfoModal from "../common/modals/ShopInfoModal";

const Topbar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <ShopInfoModal />
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
