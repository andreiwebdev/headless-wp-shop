import { Link } from "react-router-dom";

type Props = {
    heading: string;
    linkText: string;
    link?: any;
};

const HeadingWithLink = (props: Props) => {
    return (
        <div className="heading-with-link">
            <h2>{props.heading}</h2>
            <Link to={props.link}>{props.linkText}</Link>
        </div>
    );
};

export default HeadingWithLink;
