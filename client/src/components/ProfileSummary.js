import React from 'react'
import ProfileCalendar from './ProfileCalendar'
import ProfileCard from './ProfileCard'
import './ProfileSummary.css'

function ProfileSummary() {
    return (
        <div className="profileSummary">
            <h1 className="ProfileSummary__h1">Summary</h1>
            <div className="profileSummary__container">
                <div className="profileSummary__cards">
                    <ProfileCard name="Temperature" value="36.5°C" range="36.3-36.7"/>
                    <ProfileCard name="Blood saturation" value="98%" range="95-100"/>
                    <ProfileCard name="Blood pressure" value="112/75" range="90/60-120/80"/>
                    <ProfileCard name="Pulse" value="88bpm" range="60-110"/>
                </div>
                <div className="profileSummary__calendar">
                    <ProfileCalendar />
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary
