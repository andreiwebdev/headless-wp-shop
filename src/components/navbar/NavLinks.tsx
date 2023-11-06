import React, { useState, useEffect, Suspense } from "react";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "../layout/Skeleton";

const NavItem = React.lazy(() => import("./NavItem"));

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
    const { loading, data } = useQuery(GET_MENU_ITEMS);

    useEffect(() => {
        if (!loading && data) {
            const menuItems = data?.menu?.menuItems?.edges;
            setMenuItems(menuItems);
        }
    }, [loading, data]);

    return (
        <div className="nav-links">
            <ul>
                {menuItems?.map((item: Item, key: number) => (
                    <Suspense
                        key={key}
                        fallback={<Skeleton type="line-navbar" />}
                    >
                        <NavItem
                            key={item?.node?.id}
                            id={item?.node?.id}
                            label={item?.node?.label}
                            uri={item?.node?.uri}
                        />
                    </Suspense>
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
