import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import authHeader from '../services/authHeader';
import './SettingsNotifications.css'


function SettingsNotifications(props) {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const API_URL = "http://localhost:8080";

    const onSubmit = async (data) => {
        const { secEmail, isNotifOn } = data;

        return axios.put(API_URL + "/api/Authenticate/UpdateUserDetails", {
            secEmail, isNotifOn
        }, {
            headers: authHeader()
        }).then(async (response) => {
            console.log(response);
        });
    };

    useEffect(() => {
        setValue('isNotifOn', props.userHealthInf.isNotifOn);
    })

    return (
        <div className="settingsNotifications">
            <h1 className="settingsNotifications__h1">Notifications settings</h1>
            <form className="settingsNotifications__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="settingsNotifications__inputs">
                    <label className="settingsNotifications__sms">
                        <input className="settingsNotifications__checkbox" type="checkbox" name="isNotifOn"{...register("isNotifOn")} />
                        <h3>Enable SMS notifications </h3>
                    </label>
                    {errors.isNotifOn && (
                            <p style={{ color: "red" }}>{errors.name.isNotifOn}</p>
                        )}
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
