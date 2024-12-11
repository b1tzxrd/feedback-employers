import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { removeUser } from "../pages/LoginPage/userSlice";

const Header = () => {

    const { userName, isAuth, isAdmin } = useAuth();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = () => {
        const auth = getAuth()
        signOut(auth)
        .then(() => {
            dispatch(removeUser())
            navigate('/')      
        })
            .catch(error => console.error(error))
    }

    return (
        <header className="bg-light w-100">
            <Container className="p-3">
                <Row className="justify-content-between align-items-center">
                    <Col md="auto">
                        <Nav.Link as={Link} to='/'>
                            <h1 className="fs-4">feedback-employers</h1>
                        </Nav.Link>
                    </Col>
                    <Col md="auto">

                        {
                            isAuth ? (

                                <Nav>
                                    <Nav.Link as={Link} to="/add-review">
                                        Написать отзыв
                                    </Nav.Link>
                                    <Nav.Link >
                                        {userName}
                                    </Nav.Link>
                                    <Button onClick={handleSignOut} variant="link">Выйти из аккаунта</Button>
                                    {
                                        isAdmin ? (
                                            <Nav.Link as={Link} to="/admin-panel">
                                                Админ панель
                                            </Nav.Link>
                                        ) : null
                                    }
                                </Nav>
                            ) : (
                                <>
                                    <Button as={Link} to='/login' variant="outline-primary">Войти</Button>{' '}
                                    <Button as={Link} to='/registration' variant="primary">Зарегестрироваться</Button>{' '}
                                </>
                            )
                        }


                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;


