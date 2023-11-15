import { useRef, useEffect, useState } from "react";

import { BiTime } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

import { FaAngleDown } from "react-icons/fa";

const ShopInfoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={modalRef}
            className="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-start"
        >
            <div className="shop-info-ctn justify-content-md-start">
                <p
                    style={{ cursor: "pointer" }}
                    className="d-flex align-items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="pr-2">Mon-Thu: </span>
                    9:00 AM - 5:30 PM
                    <FaAngleDown className="fa-angle-down" />
                </p>
                {isOpen && (
                    <div className="shop-info">
                        <div className="row">
                            <div className="col-3">
                                <BiTime />
                            </div>
                            <div className="col-9">
                                <h5>We are open:</h5>
                                <p>
                                    <span>Mon-Thu:</span> 9:00 AM - 5:30 PM
                                </p>
                                <p>
                                    <span>Fr:</span> 9:00 AM - 6:00 PM
                                </p>
                                <p>
                                    <span>Sat:</span> 11:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <LuMapPin />
                            </div>
                            <div className="col-9">
                                <h5>
                                    Address: 1234 Street Adress, City Address,
                                    1234
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    Phone: <a href="#">(00) 1234 5678</a>
                                </p>
                                <p>
                                    E-mail: <a href="#">shop@email.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopInfoModal;
