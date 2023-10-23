type Props = {
    title: string;
    text: string;
    imageUrl: string;
};

const ProductBanner = (props: Props) => {
    return (
        <div className="product-banner">
            <div className="container">
                <div className="row align-items-md-center">
                    <div className="col-md-6 mb-md-0">
                        <img src={props.imageUrl} alt={props.title} />
                    </div>
                    <div className="col-md-6 mb-5">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;
