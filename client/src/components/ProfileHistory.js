import React from 'react'
import HistoryCard from './HistoryCard'
import './ProfileHistory.css'

function ProfileHistory(props) {

    const prepareData = (dataName) => {
        return props.data ? props.data.map(item => [item[dataName],item[dataName]]) : '';
    }
    
    return (
        <div className="profileHistory">
            <h1 className="profileHistory__h1">
                Your health history
            </h1>
            <div className="profileHistory__container">
                <HistoryCard data={prepareData('temperature')} name='Temperature' />
                <HistoryCard data={prepareData('saturation')} name='Blood saturation' />
                <HistoryCard data={prepareData('bloodPressure')} name='Blood pressure' />
                <HistoryCard data={prepareData('pulse')} name='Pulse' />
            </div>
        </div>
    )
}

export default ProfileHistory
