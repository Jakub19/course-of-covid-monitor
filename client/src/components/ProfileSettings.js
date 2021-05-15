import React from 'react'
import './ProfileSettings.css'
import ProfileAvatar from './ProfileAvatar'

function ProfileSettings() {
    return (
        <div className="profileSettings">
            <div className='profileSettings__card'>
                <div className="profileSettings__nav">
                    <ProfileAvatar />
                    <h1 className="profileSettings__username">Jan Kowalski</h1>
                    <ul className="profileSettings__list">
                        <li className="profileSettings__button profileSettings__button--active">Account</li>
                        <li className="profileSettings__button">Password</li>
                        <li className="profileSettings__button" >Notifications</li>
                    </ul>
                </div>
                <div className="profileSettings__content">
                    <h1 className="profileSettings__content--h1">Account Settings</h1>
                    <form className="profileSettings__form">
                        <label className="profileSettings__form--label">
                            <h3>First name</h3>
                            <input className="profileSettings__form--input" type="text" name="firstName" />
                        </label>
                        <label className="profileSettings__form--label">
                            <h3>Last name</h3>
                            <input className="profileSettings__form--input" type="text" name="lastName" />
                        </label>
                        <label className="profileSettings__form--label">
                            <h3>E-mail</h3>
                            <input className="profileSettings__form--input" type="text" name="email" />
                        </label>
                        <label className="profileSettings__form--label">
                            <h3>Phone number</h3>
                            <input className="profileSettings__form--input" type="text" name="phoneNumber" />
                        </label>
                        <label className="profileSettings__form--label">
                            <h3>Address</h3>
                            <input className="profileSettings__form--input" type="text" name="address" />
                        </label>
                        <label className="profileSettings__form--label">
                            <h3>City</h3>
                            <input className="profileSettings__form--input" type="text" name="city" />
                        </label>
                        <input className="profileSettings__submit" type="submit" value="Save" />
                        <input className="profileSettings__cancel" type="reset" value="Cancel" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
