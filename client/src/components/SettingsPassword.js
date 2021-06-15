import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import authHeader from '../services/authHeader';
import './SettingsPassword.css'


function SettingsPassword() {
    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();
    const API_URL = "http://localhost:8080/api/";

    const onSubmit = async (data) => {
        const {currentPassword, newPassword} = data;

        return axios.put(API_URL + "Authenticate/UpdateUserPassword", {
            currentPassword, newPassword
        }, {
            headers: authHeader()
        }).then(async (response) => {
            console.log(response);
        });
    };

    return (
        <div className="settingsPassword">
            <h1 className="settingsPassword__h1">Password settings</h1>
            <form className="settingsPassword__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="settingsPassword__inputs">
                    <label className="settingsPassword__label">
                        <h3>Current password</h3>
                        <input className="settingsPassword__input" type="password" required="required" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="currentPassword" {...register("currentPassword")} />
                        {errors.currentPassword && (
                            <p style={{ color: "red" }}>{errors.currentPassword.message}</p>
                        )}
                    </label>
                    <label className="settingsPassword__label">
                        <h3>New password</h3>
                        <input className="settingsPassword__input" type="password" required="required" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="newPassword" {...register("newPassword")} />
                        {errors.newPassword && (
                            <p style={{ color: "red" }}>{errors.newPassword.message}</p>
                        )}
                    </label>
                    <label className="settingsPassword__label">
                        <h3>Confirm new password</h3>
                        <input className="settingsPassword__input" type="password" required="required" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="newPassConf" {...register("newPassConf", 
                        {
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { newPassword } = getValues();
                                    return newPassword === value || "Passwords should match!";
                                }
                            }
                        })}
                        />
                        {errors.newPassConf && (
                            <p style={{ color: "red" }}>
                                {errors.newPassConf.message}
                            </p>
                        )}
                    </label>
                </div>
                <div className="settingsPassword__buttons">
                    <input className="settingsPassword__submit" type="submit" value="Save" />
                    <input className="settingsPassword__cancel" type="button" onClick={() => reset()} value="Cancel" />
                </div>
            </form>
        </div>
    )
}

export default SettingsPassword
