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
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
                <div className="profileSummary__calendar">
                    <ProfileCalendar />
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary
