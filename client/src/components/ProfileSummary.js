import React from 'react'
import ProfileCard from './ProfileCard'
import './ProfileSummary.css'

function ProfileSummary() {
    return (
        <div className="profileSummary">
            <h1>Summary</h1>
            <div className="profileSummary__cards">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
            <div className="profileSummary__calendar">
            </div>
        </div>
    )
}

export default ProfileSummary
