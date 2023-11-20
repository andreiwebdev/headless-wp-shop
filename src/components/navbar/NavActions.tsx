import NavCart from "./NavCart";
import NavProfile from "./NavProfile";
import NavSearchIcons from "./NavSearchIcons";

type Props = {
    hideNav: () => void;
};

const NavActions = (props: Props) => {
    return (
        <>
            <div className="nav-actions d-flex">
                <NavSearchIcons hideNav={props.hideNav} />
                <NavCart />
                <NavProfile />
            </div>
        </>
    );
};

export default NavActions;
