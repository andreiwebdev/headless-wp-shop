import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Item = {
    node: any;
};

const NavLinks = () => {
    const GET_MENU_ITEMS = gql`
        query MyQuery2 {
            menu(id: "12", idType: DATABASE_ID) {
                id
                menuItems {
                    edges {
                        node {
                            id
                            label
                            uri
                        }
                    }
                }
            }
        }
    `;

    const [menuItems, setMenuItems] = useState([]);
    const { loading, error, data } = useQuery(GET_MENU_ITEMS);

    useEffect(() => {
        if (!loading && data) {
            const menuItems = data?.menu?.menuItems?.edges;
            setMenuItems(menuItems);
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error {error.message}</p>;

    return (
        <div className="nav-links">
            <ul>
                {menuItems?.map((item: Item) => (
                    <li key={item?.node?.id}>
                        <Link to={item?.node?.uri}>{item?.node?.label}</Link>
                    </li>
                ))}
                <li className="d-xl-none">
                    <a href="#">My Account</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">My Wish List (0)</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">Create an Account</a>
                </li>
                <li className="d-xl-none">
                    <a href="#">Sign In</a>
                </li>
            </ul>
            <a href="#" className="btn btn--1">
                Our Deals
            </a>
        </div>
    );
};

export default NavLinks;
