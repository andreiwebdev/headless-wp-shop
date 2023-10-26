import { Link } from "react-router-dom";

type Props = {
    bannerURL: string;
    title: string;
    uri: string;
};

const BannerInCol = (props: Props) => {
    return (
        <div
            className="banner-in-col"
            style={{
                backgroundImage: `url(${props.bannerURL})`,
            }}
        >
            <h3>{props.title}</h3>
            <Link to={props.uri}>Se All Products</Link>
        </div>
    );
};

export default BannerInCol;
