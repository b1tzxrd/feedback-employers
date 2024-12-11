import { useState } from "react"
import { Form, Button } from "react-bootstrap"


// eslint-disable-next-line react/prop-types
const Forms = ({ title, handleClick, isRegistration }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(email, pass, name);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {isRegistration && ( 
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder={`${isRegistration ? 'Придумайте пароль' : 'Введите пароль'}`}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)} />
            </Form.Group>
            <Button
                variant="success"
                type="submit">
                {title}
            </Button>
        </Form>
    )
}

export default Forms