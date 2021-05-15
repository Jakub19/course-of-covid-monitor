import React from 'react'
import './ProfileSettings.css'
import ProfileAvatarSet from './ProfileAvatarSet'

function ProfileSettings() {
    return (
        <div className='profileSettings'>
            <div className="profileSettings__card">
                <ProfileAvatarSet />
                <h1 id="username">Jan Kowalski</h1>
                    <div className="accountSet">
                        <h2 id="account">Account</h2>
                    </div>
            </div>
                <h1 className='line'></h1>
                <h1 id="accountSettings">Account Settings</h1>
                <div className="info">
                    <h2 id="infoAccount">First name</h2>
                    <input type="text" id="firstName"/>
                    <h2 id="infoAccount2">Last name</h2>
                    <input type="text" id="lastName"/>
                    <h2 id="infoAccount3">E-mail</h2>
                    <input type="text" id="email"/>
                    <h2 id="infoAccount4">Phone number</h2>
                    <input type="text" id="phoneNumber"/>
                    <h2 id="infoAccount5">Address</h2>
                    <input type="text" id="address"/>
                    <h2 id="infoAccount6">City</h2>
                    <input type="text" id="city"/>
                </div>
        </div>
             
    )
   
}

export default ProfileSettings
