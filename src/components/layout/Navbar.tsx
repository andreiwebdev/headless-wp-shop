import { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";

// componets
import Topbar from "./Topbar";
import NavLinks from "../navbar/NavLinks";
import NavActions from "../navbar/NavActions";
import Logo from "../common/Logo";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <Topbar />
            <div className="navbar">
                <div className="container">
                    <Logo />
                    <div
                        className={
                            isNavOpen ? "nav-items open" : "nav-items closed"
                        }
                    >
                        <div className="container">
                            <NavLinks />
                            <NavActions />
                        </div>
                    </div>
                    <FiMenu
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="menu-icon d-xl-none"
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
