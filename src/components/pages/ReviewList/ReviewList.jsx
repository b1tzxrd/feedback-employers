import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, selectAll } from "./ReviewSlice";
import { useEffect, useState } from "react";
import { Spinner, ListGroup } from "react-bootstrap";
import Paginations from "../../Pagination/Pagination";


const ReviewList = ({ ReviewListItem, status }) => {
    const dispatch = useDispatch();
    const reviews = useSelector(selectAll);
    const reviewLoadingStatus = useSelector(state => state.reviews.reviewLoadingStatus);
    const [currentPage, setCurrentPage] = useState(1);

    const ITEM_PER_PAGE = 10;

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    const filteredReviews = reviews.filter(item => item.status === status);

    const lastIndex = ITEM_PER_PAGE * currentPage;
    const firstIndex = lastIndex - ITEM_PER_PAGE;
    const currentReviews = filteredReviews.slice(firstIndex, lastIndex);

    if (reviewLoadingStatus === 'loading') {
        return <Spinner animation="border" variant="primary" />;
    } else if (reviewLoadingStatus === 'error') {
        return <h5>Ошибка загрузки</h5>;
    }

    const renderReviews = (arr) => {
        if (arr.length === 0) {
            return <h5>Отзывов пока нет</h5>;
        }

        return arr.map(({ id, ...props }) => {
            return (<ReviewListItem key={id} id={id} {...props} />);
        });
    };

    const elements = renderReviews(currentReviews);

    return (
        <>
            <ListGroup>
                {elements}
            </ListGroup>
            <Paginations
                currentPage={currentPage}
                totalItems={reviews.length}
                itemPerPage={ITEM_PER_PAGE}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

ReviewList.propTypes = {
    ReviewListItem: PropTypes.elementType.isRequired,
    status: PropTypes.string.isRequired
};

export default ReviewList;
