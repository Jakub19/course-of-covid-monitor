import React, { useContext, useEffect, useState } from 'react'
import ProfileTop from '../components/ProfileTop'
import ProfileSummary from '../components/ProfileSummary'
import ProfileHistory from '../components/ProfileHistory'
import './ProfileOverview.css'
import axios from 'axios'
import authHeader from '../services/authHeader'
import { UserContext } from '../services/UserContext'

function ProfileOverview(props) {
    const [formData, setFormData] = useState()
    const { API_URL} = useContext(UserContext);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='profileOverview'>
            <ProfileTop userHealthInf={props.userHealthInf} setShowForm={props.setShowForm}/>
            <ProfileSummary data={formData}/>
            <ProfileHistory data={formData}/> 
        </div>           
    ) 
}

export default ProfileOverview
