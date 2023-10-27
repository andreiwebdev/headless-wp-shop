import Faq from "./Faq";

type Props = {
    faqs: [] | undefined;
};

const FaqsSection = (props: Props) => {
    return (
        <div className="faq-section">
            <div className="container">
                <div className="row align-items-md-center">
                    <div className="col-md-6">
                        {props.faqs?.map((faq: any, key: any) => (
                            <Faq
                                key={key}
                                title={faq.question}
                                text={faq.answer}
                            />
                        ))}
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
