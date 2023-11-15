import { useState } from "react";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

// images
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavProfile from "./NavProfile";

const NavActions = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

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
                <NavCart />
                <NavProfile />
            </div>
            <NavSearch isVisible={isSearchOpen} />
        </>
    );
};

export default NavActions;
