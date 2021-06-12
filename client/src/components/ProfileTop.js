import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../services/UserContext';
import authHeader from '../services/authHeader'
import Avatar from './Avatar'
import './ProfileTop.css'

function ProfileTop(props) {
    const { user } = useContext(UserContext);
    const API_URL = "http://localhost:8080";

    const [positiveSince, setPositiveSince] = useState('') 
    const [endOfquarantine, setEndOfquarantine] = useState('') 

    
    const getHealthInformation = () => {
        axios.get(API_URL + "/api/HealthInformationOverviews", { headers: authHeader() })
        .then((response) => {
            response.data ? 
            setPositiveSince(response.data)
            :
            setPositiveSince('No data')
        }).catch((err) =>{
            setPositiveSince('Error')
            setEndOfquarantine('Error')
        })
    };

    useEffect(() => {
        getHealthInformation();
    }, [])

    return (
        <div className="profileTop">
            <Avatar />
            <div className="profileTop__card">
                <div className="profileTop__card--headline">
                    {user.name + ' ' + user.surname}
                </div>
                <div className="profileTop__card--container">
                    <div className="profileTop__card--row">
                        <h4>COVID positive since: </h4><p>{positiveSince}</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>End of quarantine: </h4><p>{endOfquarantine}</p>
                    </div>
                </div>
            </div>
            <div className="profileTop__card--reminder">
                <div className="profileTop__card--reminderContainer"><h3 className="profileTop__card--reminderText">Form is awaiting completion</h3></div>
                <button className="profileTop__card--button">Fill now</button>
            </div>
        </div>
    )
}

export default ProfileTop
