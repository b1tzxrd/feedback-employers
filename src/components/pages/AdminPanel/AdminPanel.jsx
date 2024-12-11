import { useState } from "react";
import { Button, Col, Container,} from "react-bootstrap";
import ReviewList from "../ReviewList/ReviewList";
import ReviewsListItemAdmin from "../ReviewsListItemAdmin/ReviewsListItemAdmin";

const AdminPanel = () => {

    const [status, setStatus] = useState('success')

    return (
        <Container className="mt-5">
            <Col className="mx-auto">
                <h2 className="text-center">Админ панель</h2>
                <div className="d-flex gap-2 mb-2 flex-wrap" >
                    <Button onClick={() => setStatus('success')} variant="outline-primary">Рассмотренные</Button>
                    <Button onClick={() => setStatus('consideration')} variant="outline-primary">Ожидающие</Button>
                    <Button onClick={() => setStatus('rejected')} variant="outline-primary">Отклоненные</Button>
                </div>
                <ReviewList ReviewListItem={ReviewsListItemAdmin} status={status} />
            </Col>
        </Container>
    )
};

export default AdminPanel;
