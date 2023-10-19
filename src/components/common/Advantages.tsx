import { AiFillTag } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Advantages = () => {
    return (
        <div className="container">
            <div className="row advantages">
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="icon-box">
                        <AiFillTag />
                    </div>
                    <h3>Product Support</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga, eum eveniet. Autem a possimus error?
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="icon-box">
                        <BiSupport />
                    </div>
                    <h3>Personal Account</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga, eum eveniet. Autem a possimus error?
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="icon-box">
                        <FaUserAlt />
                    </div>
                    <h3>Amazing Savings</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga, eum eveniet. Autem a possimus error?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
