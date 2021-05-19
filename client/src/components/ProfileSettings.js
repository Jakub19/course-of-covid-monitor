import React from 'react'
import Avatar from './Avatar'
import SettingsAccount from './SettingsAccount'
import SettingsPassword from './SettingsPassword'
import SettingsNotifications from './SettingsNotifications'
import './ProfileSettings.css'

function ProfileSettings() {
    return (
        <div className="profileSettings">
            <div className='profileSettings__card'>
                <div className="profileSettings__nav">
                    <Avatar />
                    <h1 className="profileSettings__username">Jan Kowalski</h1>
                    <ul className="profileSettings__list">
                        <li className="profileSettings__button profileSettings__button--active">Account</li>
                        <li className="profileSettings__button ">Password</li>
                        <li className="profileSettings__button" >Notifications</li>
                    </ul>
                </div>
                <div className="profileSettings__content">
                    <SettingsAccount />
                    <SettingsPassword />
                    <SettingsNotifications />
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
