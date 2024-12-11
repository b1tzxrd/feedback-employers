import { useState } from "react";
import { Form, Button, Container, Col, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createReview } from "../ReviewList/ReviewSlice";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { BASE_URL } from "../../../config/baseUrl";

const AddReview = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState(false)


    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()


        const newReview = {
            id: uuidv4(),
            title,
            author,
            review: text,
            status: "consideration"
        }

        try {
            const res = await axios.post(BASE_URL, newReview)
                
            dispatch(createReview(res.data))
            console.log("successful feedback", res.data);

            setSubmitted(true)
            setTitle('')
            setAuthor('')
            setText('')

            setTimeout(() => setSubmitted(false), 3000)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Container className="mt-5">
            <Col md="8" className="mx-auto">
                <h2>Добавить отзыв</h2>
                
                {submitted && <Alert variant="success">Отзыв успешно отправлен на рссмотрение!</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="reviewTitle">
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите заголовок"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="reviewAuthor">
                        <Form.Label>Автор</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ваше имя"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="reviewText">
                        <Form.Label>Текст отзыва</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Напишите ваш отзыв"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Добавить отзыв
                    </Button>
                </Form>
            </Col>
        </Container>
    );
};


export default AddReview;
