// ReviewsListItemAdmin.js
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useAdminActions } from "../../../hooks/useAdminActions";  // Подключаем экшены из adminActions

const ReviewsListItemAdmin = ({ id, title, author, review, status}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(review);

    const { handleUpdateReview, handleEditReview } = useAdminActions();

    const handleSaveEdit = () => {
        handleEditReview(id, editText);
        setIsEditing(false);
    };

    return (
        <li className="list-group-item">
            <h5 className="mb-1">{title}</h5>
            <small>Автор: <strong>{author}</strong></small>
            {isEditing ? (
                <Form.Control
                    as="textarea"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <p>{review}</p>
            )}
            <div className="d-flex gap-2 mt-2 flex-wrap">
                {isEditing ? (
                    <>
                        <Button variant="success" onClick={handleSaveEdit}>Сохранить</Button>
                        <Button variant="secondary" onClick={() => setIsEditing(false)}>Отменить</Button>
                    </>
                ) : (
                    <>
                        {status != "success" ? (<Button variant="outline-success" onClick={() => handleUpdateReview(id, "success")}>Принять</Button>) : null}
                        <Button variant="outline-danger" onClick={() => handleUpdateReview(id, "rejected")}>Отклонить</Button>
                        <Button variant="outline-warning" onClick={() => setIsEditing(true)}>Редактировать</Button>
                    </>
                )}
            </div>
        </li>
    );
};

ReviewsListItemAdmin.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    author: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default ReviewsListItemAdmin;
