import NavCart from "./NavCart";
import NavProfile from "./NavProfile";
import NavSearchIcons from "./NavSearchIcons";

const NavActions = () => {
    return (
        <>
            <div className="nav-actions d-none d-xl-flex">
                <NavSearchIcons />
                <NavCart />
                <NavProfile />
            </div>
        </>
    );
};

export default NavActions;
