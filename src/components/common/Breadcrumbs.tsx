import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-ctn">
            <ol className="breadcrumb container">
                {pathnames.length > 0 ? (
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                ) : (
                    <li className="breadcrumb-item active">Home</li>
                )}
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames
                        .slice(0, index + 1)
                        .join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <li key={name} className="breadcrumb-item active">
                            {decodeURIComponent(name)}
                        </li>
                    ) : (
                        <li key={name} className="breadcrumb-item">
                            <Link to={routeTo}>
                                {decodeURIComponent(name).slice(0, 30)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
