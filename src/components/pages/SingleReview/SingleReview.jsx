import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../ReviewList/ReviewSlice";
import { Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { Container, Button } from "react-bootstrap";

const SingleReview = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const review = useSelector(state => state.reviews.entities[id]);
    const reviewLoadingStatus = useSelector(state => state.reviews.reviewLoadingStatus);

    useEffect(() => {
        if (!review) {
            dispatch(fetchReviews());
        }
    }, [dispatch, review]);

    if (reviewLoadingStatus === 'loading') {
        return <Spinner animation="border" variant="primary" />;
    } else if (reviewLoadingStatus === 'error') {
        return <h5>Ошибка загрузки</h5>;
    } else if (!review) {
        return <h5>Отзыв не найден</h5>;
    }

    return (
        <Container className="my-5">
            <h2>{review.title}</h2>
            <small className="text-muted">Автор: {review.author}</small>
            <p>{review.review}</p>
            <Link to="/">
                <Button variant="primary">Вернуться обратно</Button>
            </Link>
        </Container>
    )
}

export default SingleReview;
