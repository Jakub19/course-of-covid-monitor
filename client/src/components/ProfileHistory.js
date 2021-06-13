import React from 'react'
import HistoryCard from './HistoryCard'
import './ProfileHistory.css'

function ProfileHistory() {
    return (
        <div className="profileHistory">
            <h1 className="profileHistory__h1">
                Your health history
            </h1>
            <div className="profileHistory__container">
                <HistoryCard name='Temperature'/>
                <HistoryCard name='Blood saturation'/>
                <HistoryCard name='Blood pressure'/>
                <HistoryCard name='Pulse'/>
            </div>
        </div>
    )
}

export default ProfileHistory
