import Faq from "./Faq";

const FaqsSection = () => {
    return (
        <div className="faq-section">
            <div className="container">
                <div className="row align-items-md-center">
                    <div className="col-md-6">
                        <Faq
                            title="Product Support"
                            text="This is an answer. 😄"
                        />
                        <Faq title="FAQ" text="This is an answer. 😄" />
                        <Faq
                            title="Our Buyer Guide"
                            text="This is an answer. 😄"
                        />
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img
                            src="../../src/assets/images/support.png"
                            alt="support"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqsSection;
