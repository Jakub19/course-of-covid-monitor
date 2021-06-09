import React from 'react'
import { useForm } from "react-hook-form";
import './SettingsNotifications.css'

function SettingsNotifications() {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <div className="settingsNotifications">
            <h1 className="settingsNotifications__h1">Notifications settings</h1>
            <form className="settingsNotifications__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="settingsNotifications__inputs">
                    <label className="settingsNotifications__label">
                        <h3>Send notifications to secondary email</h3>
                        <input className="settingsNotifications__input" type="email"{...register("secEmail")} />
                    </label>
                    <label className="settingsNotifications__sms">
                        <input className="settingsNotifications__checkbox" type="checkbox" {...register("sendSms")} />
                        <h3>Enable SMS notifications </h3>
                    </label>
                </div>
                <div className="settingsNotifications__buttons">
                    <input className="settingsNotifications__submit" type="submit" value="Save" />
                    <input className="settingsNotifications__cancel" type="button" onClick={() => reset()} value="Cancel" />
                </div>
            </form>
        </div>
    )
}

export default SettingsNotifications
