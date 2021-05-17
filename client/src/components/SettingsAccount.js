import React from 'react'
import './SettingsAccount.css'

function SettingsAccount() {
    return (
        <div className="settingsAccount">
            <h1 className="settingsAccount__h1">Account ettings</h1>
            <form className="settingsAccount__form">
                <div className="settingsAccount__inputs">
                    <label className="settingsAccount__label">
                        <h3>First name</h3>
                        <input className="settingsAccount__input" type="text" name="firstName" />
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Last name</h3>
                        <input className="settingsAccount__input" type="text" name="lastName" />
                    </label>
                    <label className="settingsAccount__label">
                        <h3>E-mail</h3>
                        <input className="settingsAccount__input" type="email" name="email" />
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Phone number</h3>
                        <input className="settingsAccount__input" type="text" name="phoneNumber" />
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Address</h3>
                        <input className="settingsAccount__input" type="text" name="address" />
                    </label>
                    <label className="settingsAccount__label">
                        <h3>City</h3>
                        <input className="settingsAccount__input" type="text" name="city" />
                    </label>
                </div>
                <div className="settingsAccount__buttons">
                    <input className="settingsAccount__submit" type="submit" value="Save" />
                    <input className="settingsAccount__cancel" type="reset" value="Cancel" />
                </div>
            </form>
        </div>
    )
}

export default SettingsAccount
