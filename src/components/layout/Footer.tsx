import { gql, useQuery } from "@apollo/client";
import Advantages from "../common/Advantages";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ChildItem {
    id: string;
    label: string;
    uri: string;
}

interface FooterItemNode {
    id: string;
    label: string;
    childItems: {
        nodes: ChildItem[];
    };
}

interface FooterItem {
    node: FooterItemNode;
}

const Footer = () => {
    const GET_FOOTER_MENU = gql`
        query footerMenu {
            menu(id: "18", idType: DATABASE_ID) {
                id
                menuItems {
                    edges {
                        node {
                            id
                            label
                            uri
                            childItems {
                                nodes {
                                    id
                                    label
                                    uri
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    const [footerItems, setFooterItems] = useState([]);
    const { loading, error, data } = useQuery(GET_FOOTER_MENU);

    useEffect(() => {
        if (!loading && data) {
            const response = data?.menu?.menuItems?.edges;
            setFooterItems(response);
        }
    }, [loading, data]);

    if (loading) return <p>Loading</p>;

    if (error) return <p>Error {error.message}</p>;

    return (
        <>
            <Advantages />
            <footer>
                <div className="container">
                    <div className="row mb-4 mb-md-5 align-items-md-center">
                        <div className="col-md-6 mb-3 mb-3">
                            <h2>Sign Up To Our Newsletter.</h2>
                            <p>Be the first to hear about the latest offers.</p>
                        </div>
                        <div className="col-md-6">
                            <form className="newsletter">
                                <input type="text" placeholder="Your Email" />
                                <button className="btn btn--2" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        {footerItems
                            ?.filter(
                                (item: FooterItem) =>
                                    item.node.childItems.nodes.length >= 1
                            )
                            .map((item: FooterItem) => (
                                <div
                                    key={item.node.id}
                                    className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"
                                >
                                    <h4>{item.node.label}</h4>
                                    <ul>
                                        {item.node.childItems.nodes.map(
                                            (childItem: ChildItem) => (
                                                <li key={childItem.id}>
                                                    <Link to={childItem.uri}>
                                                        {childItem.label.slice(
                                                            0,
                                                            19
                                                        )}
                                                        ...
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                    </div>
                    <div className="row bottom-bar">
                        <div className="col-6">
                            <div className="social">
                                <a href="#">
                                    <AiFillFacebook />
                                </a>
                                <a href="#">
                                    <AiFillInstagram />
                                </a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="copyright">
                                Copyright © 2020 Shop Pty. Ltd.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
