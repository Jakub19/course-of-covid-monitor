import React from 'react'
import useForm from "../services/useForm";
import useAuth from '../services/useAuth';
import "./Login.css"


function Login(props) {
    const { values, handleChange} = useForm({
        initialValues: {
          email: '',
          password: ''
        }
      });
const { loginUser, error } = useAuth();

const handleLogin = async (e) => {
   e.preventDefault();
   await loginUser(values);
}

   
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input className="login__input" type="email" required="required" placeholder="email" name="email" value={values.email} onChange={handleChange}></input>
                <input className="login__input" type="password" required="required" placeholder="password" name="password" value={values.password} onChange={handleChange}></input>
                <span className="login__error">{error}</span>
                <button className="login__button" type="submit" >Sign in</button>              
            </form>
        </div>
    )
}

export default Login
