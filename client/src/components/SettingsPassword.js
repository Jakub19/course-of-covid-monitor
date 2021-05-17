import React from 'react'
import './SettingsPassword.css'

function SettingsPassword() {
    return (
        <div className="settingsPassword">
            <h1 className="settingsPassword__h1">Password settings</h1>
            <form className="settingsPassword__form">
                <div className="settingsPassword__inputs">
                    <label className="settingsPassword__label">
                        <h3>Current password</h3>
                        <input className="settingsPassword__input" type="text" name="PasswordCur" />
                    </label>
                    <label className="settingsPassword__label">
                        <h3>New password</h3>
                        <input className="settingsPassword__input" type="text" name="PasswordNew" />
                    </label>
                    <label className="settingsPassword__label">
                        <h3>Confirm new password</h3>
                        <input className="settingsPassword__input" type="text" name="PasswordConf" />
                    </label>
                </div>
                <div className="settingsPassword__buttons">
                    <input className="settingsPassword__submit" type="submit" value="Save" />
                    <input className="settingsPassword__cancel" type="reset" value="Cancel" />
                </div>
            </form>
        </div>
    )
}

export default SettingsPassword
