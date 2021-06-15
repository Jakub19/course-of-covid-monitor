import React from 'react'
import Calendar from './Calendar'
import SummaryCard from './SummaryCard'
import './ProfileSummary.css'

function ProfileSummary() {
    return (
        <div className="profileSummary">
            <h1 className="profileSummary__h1">Summary</h1>
            <div className="profileSummary__container">
                <SummaryCard name="Temperature" value="36.5°C" range="36.3-36.7" />
                <SummaryCard name="Blood saturation" value="98%" range="95-100" />
                <SummaryCard name="Blood pressure" value="112/75" range="90/60-120/80" />
                <SummaryCard name="Pulse" value="88bpm" range="60-110" />
                <Calendar />
            </div>
        </div>
    )
}

export default ProfileSummary
