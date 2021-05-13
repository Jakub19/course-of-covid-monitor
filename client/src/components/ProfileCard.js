import React from 'react'
import './ProfileCard.css'

function ProfileCard() {
    return (
        <div className="card">
            <div className="card__arrow">

            </div>
            <div className="card__containter">
                <div className="card__containter--name">
                    Temperature
                </div>
                <div className="card__containter--value">
                    36.6
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
