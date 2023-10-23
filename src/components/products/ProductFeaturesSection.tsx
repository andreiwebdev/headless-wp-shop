type Props = {
    title: string;
    text: string;
    features: [];
};

const ProductFeaturesSection = (props: Props) => {
    return (
        <section className="product-features">
            <div className="container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className="row">
                    {props.features?.map((feature: any, key) => (
                        <div
                            key={key}
                            className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0"
                        >
                            <div className="feature">
                                <div className="icon-box">
                                    <img
                                        src={feature?.image?.sourceUrl}
                                        alt="feature"
                                    />
                                </div>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: feature.text,
                                    }}
                                ></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductFeaturesSection;
