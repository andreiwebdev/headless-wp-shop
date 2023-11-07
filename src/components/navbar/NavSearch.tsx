import { BiSearch } from "react-icons/bi";

type Props = {
    isVisible: boolean;
};

const NavSearch = (props: Props) => {
    return (
        <form className={props.isVisible ? "form--1 open" : "form--1 closed"}>
            <input
                type="text"
                placeholder="Search entiere store here..."
                className="search-input"
            />
            <input type="submit" className="submit-input" value="" />
            <BiSearch />
        </form>
    );
};

export default NavSearch;
