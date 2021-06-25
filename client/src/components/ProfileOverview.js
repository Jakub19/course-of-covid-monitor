import React, { useEffect, useState } from 'react'
import ProfileTop from '../components/ProfileTop'
import ProfileSummary from '../components/ProfileSummary'
import ProfileHistory from '../components/ProfileHistory'
import './ProfileOverview.css'
import axios from 'axios'
import authHeader from '../services/authHeader'

function ProfileOverview(props) {
    const [formData, setFormData] = useState()

    const API_URL = "http://localhost:8080"

    //Fetch user's daily forms
    const getFormsData = () => {
        axios.get(API_URL + "/api/DailyInformationForm/GetCurrentUserDailyForm", { headers: authHeader() })
            .then((response) => {
                setFormData(response.data)
            }).catch((err) => {

            })
    };

    useEffect(() => {
        getFormsData();
    }, [])

    return (
        <div className='profileOverview'>
            <ProfileTop userHealthInf={props.userHealthInf}/>
            <ProfileSummary data={formData}/>
            <ProfileHistory data={formData}/> 
        </div>           
    ) 
}

export default ProfileOverview
