import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row mb-4 mb-md-5 align-items-md-center">
                    <div className="col-md-6 mb-3 mb-3">
                        <h2>Sign Up To Our Newsletter.</h2>
                        <p>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className="col-md-6">
                        <form className="newsletter">
                            <input type="text" placeholder="Your Email" />
                            <button className="btn btn--2" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row mb-4 mb-md-5">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">About Zip</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <h4>PC Parts</h4>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">About Zip</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <h4>Desktop PCs</h4>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">About Zip</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <h4>Laptops</h4>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">About Zip</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <h4>Address</h4>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">About Zip</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <h4>Address</h4>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">About Zip</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                            </li>
                            <li>
                                <a href="#">Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row bottom-bar">
                    <div className="col-6">
                        <div className="social">
                            <a href="#">
                                <AiFillFacebook />
                            </a>
                            <a href="#">
                                <AiFillInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="copyright">
                            Copyright © 2020 Shop Pty. Ltd.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
