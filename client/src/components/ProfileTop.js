import React from 'react'
import Avatar from './Avatar'
import './ProfileTop.css'

function ProfileTop() {
    return (
        <div className="profileTop">
            <Avatar />
            <div className="profileTop__card">
                <div className="profileTop__card--headline">
                    Jan Kowalski
                    </div>
                <div className="profileTop__card--container">
                    <div className="profileTop__card--row">
                        <h4>COVID positive since: </h4><p>2.05.2021</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>End of quarantine: </h4><p>18.05.2021</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>Form submitted: </h4><p>5 times</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTop
