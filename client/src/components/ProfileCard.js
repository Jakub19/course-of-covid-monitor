import React from 'react'
import './ProfileCard.css'

function ProfileCard(props) {
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__arrow">
                    <h1>^</h1>
                </div>
                <div className="card__info">
                    <div className="card__info--name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="card__info--value">
                        <h1>{props.value}</h1>
                    </div>
                </div>
            </div>
                <h5 className="card__range--text">Normal range {props.range}</h5>
        </div>
    )
}

export default ProfileCard
