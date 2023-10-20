import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
    title: string;
    text: string;
};

const Faq = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-ctn">
            <div onClick={() => setIsOpen(!isOpen)} className="faq">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>{props.title}</h3>
                    <FaAngleDown />
                </div>
            </div>
            {isOpen && (
                <div className="faq-text">
                    <p>{props.text}</p>
                </div>
            )}
        </div>
    );
};

export default Faq;
