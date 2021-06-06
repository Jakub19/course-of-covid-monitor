import React, { useState } from 'react'
import "./Login.css"
import AuthService from "../services/authService";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        AuthService.login(email, password).then(
            () => {
                props.history.push("/profile");
                window.location.reload();
            },
            (error) => {
                if (error.response.status === 401) {
                    setMessage("Invalid email or password!");
                }
                if (error.response.status === 500) {
                    setMessage("Server error, prease try again.");
                }
            }
        );
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input className="login__input" type="email" required="required" placeholder="username" name="username" value={email} onChange={onChangeEmail}></input>
                <input className="login__input" type="password" required="required" placeholder="password" name="password" value={password} onChange={onChangePassword}></input>
                <span className="login__error">{message}</span>
                <button className="login__button" type="submit" disabled={loading}>Sign in</button>              
            </form>
        </div>
    )
}

export default Login
