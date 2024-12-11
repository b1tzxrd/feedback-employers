import { useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"
import Forms from "../../Forms/Forms"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Container, Col } from "react-bootstrap"
import { setUser } from "./userSlice";




const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(setUser({
                userName: user.displayName,
                id: user.uid,
                email: user.email,
                token: user.accessToken,
                isAdmin: user.email === 'admintest@gmail.com'
            }))
            navigate('/')
        })
        .catch(err => console.error(err))
    }

    return (
        <Container className="mt-5">
            <Col md={3} className="mx-auto">
                <h2>Авторизоваться</h2>
                <Forms title='Войти' handleClick={handleLogin} isRegistration={false} />
            </Col>
        </Container>
    )
}

export default LoginPage