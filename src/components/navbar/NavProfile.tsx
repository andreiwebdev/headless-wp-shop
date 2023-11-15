import { useState, useRef, useEffect } from "react";

const NavProfile = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            setIsProfileOpen(false);
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
            className="profile"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
            {isProfileOpen && (
                <div className="profile-card">
                    <ul>
                        <li>
                            <a href="#">My Account</a>
                        </li>
                        <li>
                            <a href="#">My Wish List (0)</a>
                        </li>
                        <li>
                            <a href="#">Create an Account</a>
                        </li>
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavProfile;
