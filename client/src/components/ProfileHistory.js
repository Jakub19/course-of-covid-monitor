import React from 'react'
import ProfileHistoryCard from './ProfileHistoryCard'
import './ProfileHistory.css'

function ProfileHistory() {
    return (
        <div className="profileHistory">
            <h1 className="profileHistory__h1">
                Your health history
            </h1>
            <div className="profileHistory__container">
                <ProfileHistoryCard />
                <ProfileHistoryCard />
                <ProfileHistoryCard />
                <ProfileHistoryCard />
            </div>
        </div>
    )
}

export default ProfileHistory
