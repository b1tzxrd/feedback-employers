import { Container, Col } from "react-bootstrap";
import Forms from "../../Forms/Forms";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../LoginPage/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password, userName) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log("User created:", user);
                return updateProfile(user, { displayName: userName })
                    .then(() => {
                        console.log("Profile updated:", user.displayName);
                        dispatch(setUser({
                            userName: user.displayName,
                            id: user.uid,
                            email: user.email,
                            token: user.accessToken,
                            isAdmin: user.email === 'admintest@gmail.com',
                        }));
                        navigate('/');
                    })
                    .catch(err => {
                        console.error("Error updating profile:", err);
                    });
            })
            .catch(err => {
                console.error("Error registering user:", err);
            });
    };

    return (
        <Container className="mt-5">
            <Col md={3} className="mx-auto">
                <h2>Регистрация</h2>
                <Forms title='Зарегистрироваться' handleClick={handleRegister} isRegistration={true} />
            </Col>
        </Container>
    );
};

export default RegisterPage;
