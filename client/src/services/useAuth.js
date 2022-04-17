import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
export default function useAuth() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);
    const API_URL = "http://localhost:8080/api/authenticate/";

    //register user
    const registerUser = async (data) => {
        const { name, surname, password, email, phoneNumber, address, city, postalCode } = data;
        await axios.post(API_URL + "register", {
            name, surname, password, email, phoneNumber, address, city, postalCode
        }).then((response) => {
            loginUser(data)
        }).catch((err) => {
            setError(err.response.data.message);
        });

    };

    //login user
    const loginUser = async (data) => {
        const { email, password } = data;
        await axios.post(API_URL + "login", {
            email, password
        }).then(async (response) => {
            if (response.data.token) {
                await localStorage.setItem("user", JSON.stringify(response.data));
                await setUser(response.data);
                history.push('/profile');
            }
            return response.data;
        }).catch((err) => {
            setError(err.response.data.title);
        });
    };


    //Logout user
    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(null);
        history.push('/');
    };

    return {
        registerUser,
        loginUser,
        logoutUser,
        error
    }
}