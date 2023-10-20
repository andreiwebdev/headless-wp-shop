const ProductFeaturesSection = () => {
    const features = [
        {
            id: "1",
        },
        {
            id: "2",
        },
        {
            id: "3",
        },
        {
            id: "4",
        },
    ];

    return (
        <section className="product-features">
            <div className="container">
                <h2>Features</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione excepturi ipsam facilis ipsa modi fugiat repellat
                    perferendis, quibusdam laboriosam repellendus!
                </p>
                <div className="row">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0"
                        >
                            <div className="feature">
                                <div className="icon-box">
                                    <img
                                        src={`../../src/assets/images/features/feature-${feature.id}.png`}
                                        alt="feature"
                                    />
                                </div>
                                <p>
                                    Lorem, <strong>ipsum dolor sit</strong> amet
                                    consectetur adipisicing elit. Cumque
                                    corporis, est ducimus tempore nisi ipsum
                                    necessitatibus? Voluptas hic esse officia
                                    tenetur? Doloremque d
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductFeaturesSection;
