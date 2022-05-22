import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./styles.css"
import axios from "axios";
import { Box, Alert } from "@mui/material"
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertText, setAlert] = useState('')
    const [severity, setSeverity] = useState('info')
    const navigate = useNavigate();

    useEffect(() => {
        const status = sessionStorage.getItem("login")
        if (status === "false") {
            setAlert("Please login to gain access to additional functions")
            setSeverity("info")
            document.getElementById("errAlert").style.display = "flex";
            sessionStorage.setItem("login", true)
        }
    }, [])

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
            if (res.data["valid"]) {
                sessionStorage.setItem("isAuth", res.data["valid"])
                navigate("/")
            } else {
                setAlert("Invalid username or password, please try again!")
                setSeverity("error")
                document.getElementById("errAlert").style.display = "flex";
            }

        }).catch(function (err) {
            console.log(err.response.data)
        })
    }

    return (
        <Box className="Login">
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
            <Box id="errAlert" mt={5} alignItems="center" justifyContent="center" display='none' sx={{ width: '100%' }}>
                <Alert sx={{ width: '25%' }} severity={severity}>{alertText}</Alert>
            </Box>
        </Box>
    )
}
