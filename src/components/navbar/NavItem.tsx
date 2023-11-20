import { Link } from "react-router-dom";

type Props = {
    onClick: any;
    id: string;
    uri: string;
    label: string;
};

const NavItem = (props: Props) => {
    return (
        <li onClick={props.onClick}>
            <Link to={props.uri}>{props.label}</Link>
        </li>
    );
};

export default NavItem;
