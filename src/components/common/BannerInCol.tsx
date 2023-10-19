type Props = {
    bannerURL: string;
    title: string;
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
            <a href="#">Se All Products</a>
        </div>
    );
};

export default BannerInCol;
