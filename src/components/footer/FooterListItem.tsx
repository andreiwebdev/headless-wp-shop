import { Link } from "react-router-dom";

type Props = {
    id: string;
    uri: string;
    label: string;
};

const FooterListItem = (props: Props) => {
    return (
        <li key={props.id}>
            <Link to={props.uri}>
                {props.label.slice(0, 19)}
                ...
            </Link>
        </li>
    );
};

export default FooterListItem;
