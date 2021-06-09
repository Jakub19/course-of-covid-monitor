import React, { useContext } from 'react'
import { UserContext } from '../services/UserContext';
import Avatar from './Avatar'
import './ProfileTop.css'

function ProfileTop(props) {
    const { user } = useContext(UserContext);
    return (
        <div className="profileTop">
            <Avatar />
            <div className="profileTop__card">
                <div className="profileTop__card--headline">
                    {user.name + ' ' + user.surname}
                </div>
                <div className="profileTop__card--container">
                    <div className="profileTop__card--row">
                        <h4>COVID positive since: </h4><p>{props.positiveSince}</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>End of quarantine: </h4><p>18.05.3031</p>
                    </div>
                </div>
            </div>
            <div className="profileTop__card--reminder">
                <div className="profileTop__card--reminderContainer"><h3 className="profileTop__card--reminderText">Form is awaiting completion</h3></div>
                <button className="profileTop__card--button">Fill now</button>
            </div>
        </div>
    )
}

export default ProfileTop
