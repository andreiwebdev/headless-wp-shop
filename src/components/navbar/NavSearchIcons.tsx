import { useState, useRef, useEffect } from "react";
import NavSearch from "./NavSearch";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

type Props = {
    hideNav: () => void;
};

const NavSearchIcons = (props: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            setIsSearchOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="nav-search-ctn" ref={modalRef}>
            {!isSearchOpen && (
                <BiSearch onClick={() => setIsSearchOpen(!isSearchOpen)} />
            )}
            {isSearchOpen && (
                <AiOutlineClose
                    className="close-searchbar"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
            )}
            <NavSearch
                hideNav={props.hideNav}
                setIsVisible={setIsSearchOpen}
                isSearchOpen={isSearchOpen}
                isVisible={isSearchOpen}
            />
        </div>
    );
};

export default NavSearchIcons;
