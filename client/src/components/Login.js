import React, { useState } from 'react'
import AuthService from "../services/authService";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

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

        AuthService.login(email, password).then(
            () => {
                props.history.push("/profile");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();            
                    setLoading(false);
                    console.log(resMessage);
            }
        );
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="username" name="username" value={email} onChange={onChangeEmail}></input>
                <input type="password" placeholder="password" name="password" value={password} onChange={onChangePassword}></input>
                <input type="submit" disabled={loading}></input>
            </form>
        </div>
    )
}

export default Login
