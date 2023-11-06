import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleBack = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
        }
    };

    return (
        <nav>
            <ul className="pagination mb-5">
                <li className={currentPage === 1 ? "d-none" : ""}>
                    <a onClick={handleBack}>
                        <FaAngleLeft />
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${
                            currentPage === number ? "active" : ""
                        }`}
                    >
                        <a
                            className="page-link"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
                <li
                    className={
                        currentPage === pageNumbers.length ? "d-none" : ""
                    }
                >
                    <a onClick={handleNext}>
                        <FaAngleRight />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
