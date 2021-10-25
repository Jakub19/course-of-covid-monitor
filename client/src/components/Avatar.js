import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import authHeader from '../services/authHeader';
import avatar from '../images/defaultAvatar.jpg'
import './Avatar.css'
import { UserContext } from '../services/UserContext';

function Avatar() {
    const { API_URL} = useContext(UserContext);;

    const getAvatar = () => {
        axios.get(API_URL + "", { headers: authHeader() })
        .then((response) => {

        }).catch((err) =>{
            return
        })
    };

    useEffect(() => {
        getAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="avatar">
            {avatar?
            <img className="avatar__img" src={avatar} alt="User avatar" />:
            <img className="avatar__img" src={avatar} alt="User avatar" />}
        </div>
    )
}

export default Avatar
