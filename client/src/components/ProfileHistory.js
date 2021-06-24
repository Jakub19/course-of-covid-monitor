import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HistoryCard from './HistoryCard'
import authHeader from '../services/authHeader'
import './ProfileHistory.css'

function ProfileHistory() {
    const API_URL = "http://localhost:8080"
    const [formData, setFormData] = useState()

    //Fetch user health information
    const getFormsData = () => {
        axios.get(API_URL + "/api/DailyInformationForm", { headers: authHeader() })
            .then((response) => {
                setFormData(response.data)
            }).catch((err) => {

            })
    };

    const prepareData = (dataName) => {
        console.log('preparing')
        console.log(formData)
        return formData ? formData.map(item => item.dataName) : '';
    }

    useEffect(() => {
        getFormsData();
    }, [])

    return (
        <div className="profileHistory">
            <h1 className="profileHistory__h1">
                Your health history
            </h1>
            <div className="profileHistory__container">
                <HistoryCard data={prepareData('temperature')} name='Temperature' />
                <HistoryCard name='Blood saturation' />
                <HistoryCard name='Blood pressure' />
                <HistoryCard name='Pulse' />
            </div>
        </div>
    )
}

export default ProfileHistory
