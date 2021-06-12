import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../services/UserContext';
import authHeader from '../services/authHeader'
import Avatar from './Avatar'
import './ProfileTop.css'

function ProfileTop() {
    const { user } = useContext(UserContext);
    const API_URL = "http://localhost:8080";

    const [positiveSince, setPositiveSince] = useState('')
    const [endOfquarantine, setEndOfquarantine] = useState('')
    const quarantineLength = 14;

    const getDates = () => {
        //Fetch user health information
        axios.get(API_URL + "/api/HealthInformationOverviews", { headers: authHeader() })
            .then((response) => {
                //If date is fetched, convert and display, if else return 'no data'
                if (response.data) {
                    let since = new Date(response.data[0].covidPositiveSince);
                    let end = new Date(response.data[0].covidPositiveSince);
                    end.setDate(end.getDate() + quarantineLength);
                    function formatDate(date) {
                        var d = new Date(date),
                            month = '' + (d.getMonth() + 1),
                            day = '' + d.getDate(),
                            year = d.getFullYear();
                    
                        if (month.length < 2) 
                            month = '0' + month;
                        if (day.length < 2) 
                            day = '0' + day;
                    
                        return [day, month, year].join('-');
                    }
                    setPositiveSince(formatDate(since))
                    setEndOfquarantine(formatDate(end))
                } else {
                    setPositiveSince('No data')
                    setEndOfquarantine('No data')
                }
            }).catch((err) => {
                setPositiveSince('Error')
                setEndOfquarantine('Error')
            })
    };

    useEffect(() => {
        getDates();
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
