import ReviewsListItem from "../../ReviewsListItem/ReviewsListItem"
import ReviewList from "../ReviewList/ReviewList"

import { Container, Row, Col } from "react-bootstrap";


function HomePage() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center mb-4">
                <Col xs="auto">
                    <h1>Отзывы</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewList ReviewListItem={ReviewsListItem} status="success" />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage