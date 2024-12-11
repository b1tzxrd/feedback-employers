import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const ReviewsListItem = ({ id, title, author, review }) => {
    const words = review.split(' ');
    const shortReview = words.length > 20 ? words.slice(0, 20).join(' ') + '...' : review;

    return (
        <ListGroup.Item>
            <h5 className="mb-1">{title}</h5>
            <small className="text-muted">Автор: {author}</small>
            <p className="mb-1">{shortReview}</p>
            <Link to={`reviews/${id}`} className="text-decoration-none">Читать полностью</Link>
        </ListGroup.Item>
    );
}

ReviewsListItem.propTypes = {
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,   
    author: PropTypes.string.isRequired,   
    review: PropTypes.string.isRequired    
};

export default ReviewsListItem;
