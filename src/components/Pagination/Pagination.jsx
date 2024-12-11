import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

const Paginations = ({ currentPage, totalItems, itemPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageItems = () => {
        const pageItems = [];
        
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageItems.push(
                    <Pagination.Item 
                        key={i} 
                        active={i === currentPage} 
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </Pagination.Item>
                );
            }
        } else {
            if (currentPage > 2) {
                pageItems.push(<Pagination.Item key={1} onClick={() => handlePageChange(1)}>1</Pagination.Item>);
                if (currentPage > 3) pageItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
            }

            for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
                pageItems.push(
                    <Pagination.Item 
                        key={i} 
                        active={i === currentPage} 
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </Pagination.Item>
                );
            }

            if (currentPage < totalPages - 1) {
                if (currentPage < totalPages - 2) pageItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
                pageItems.push(
                    <Pagination.Item 
                        key={totalPages} 
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </Pagination.Item>
                );
            }
        }
        return pageItems;
    };

    return (
        <Pagination className="justify-content-center mt-4">
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />

            {renderPageItems()}

            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    );
};

Paginations.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    itemPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Paginations;
