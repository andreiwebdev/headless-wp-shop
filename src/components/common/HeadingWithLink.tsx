type Props = {
    heading: string;
    linkText: string;
};

const HeadingWithLink = (props: Props) => {
    return (
        <div className="heading-with-link">
            <h2>{props.heading}</h2>
            <a href="#">{props.linkText}</a>
        </div>
    );
};

export default HeadingWithLink;
