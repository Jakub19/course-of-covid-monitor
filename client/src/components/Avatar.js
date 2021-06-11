import axios from 'axios';
import React, { useEffect } from 'react'
import authHeader from '../services/authHeader';
import avatar from '../images/defaultAvatar.jpg'
import './Avatar.css'

function Avatar() {
    const API_URL = "http://localhost:8080";

    const getAvatar = () => {
        axios.get(API_URL + "/api/HealthInformationOverviews", { headers: authHeader() })
        .then((response) => {

        }).catch((err) =>{
            return
        })
    };

    useEffect(() => {
        getAvatar();
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
