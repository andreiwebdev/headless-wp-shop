import { Link } from "react-router-dom";

type Props = {
    id: string;
    uri: string;
    label: string;
};

const NavItem = (props: Props) => {
    return (
        <li>
            <Link to={props.uri}>{props.label}</Link>
        </li>
    );
};

export default NavItem;
