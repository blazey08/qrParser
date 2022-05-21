import { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./styles.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return username.length > 0 && password.length > 0
    }

    function handleSubmit(e) {
        e.preventDefault();
        const f = new FormData();
        f.append('username', username);
        f.append('password', password);

        axios.post("/login", f).then((res) => {
            console.log(res.data)
            sessionStorage.setItem("isAuth", res.data["valid"])
            navigate("/")
        }).catch(function(err){
            console.log(err.response.data)
        })        
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <br />
                <Button block size="sm" type="submit" disabled={!validateForm()}>Login</Button>
            </Form>
        </div>
    )
}
