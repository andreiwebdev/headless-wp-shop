const NavLinks = () => {
    return (
        <div className="nav-links">
            <ul>
                <li>
                    <a href="#">Laptops</a>
                </li>
                <li>
                    <a href="#">Desktop PCs</a>
                </li>
                <li>
                    <a href="#">Networking Devices</a>
                </li>
                <li>
                    <a href="#">Printers & Scanners</a>
                </li>
                <li>
                    <a href="#">PC Parts</a>
                </li>
                <li>
                    <a href="#">All Other Products</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">My Account</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">My Wish List (0)</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">Create an Account</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">Sign In</a>
                </li>
            </ul>
            <a href="#" className="btn btn--1">
                Our Deals
            </a>
        </div>
    );
};

export default NavLinks;
