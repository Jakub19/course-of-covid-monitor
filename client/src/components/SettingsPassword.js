import React from 'react'
import { useForm } from "react-hook-form";
import './SettingsPassword.css'


function SettingsPassword() {

    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="settingsPassword">
            <h1 className="settingsPassword__h1">Password settings</h1>
            <form className="settingsPassword__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="settingsPassword__inputs">
                    <label className="settingsPassword__label">
                        <h3>Current password</h3>
                        <input className="settingsPassword__input" type="password" name="currPass" {...register("currPass", { required: "Password is required!" })} />
                        {errors.currPass && (
                            <p style={{ color: "red" }}>{errors.currPass.message}</p>
                        )}
                    </label>
                    <label className="settingsPassword__label">
                        <h3>New password</h3>
                        <input className="settingsPassword__input" type="password" name="newPass" {...register("newPass", { required: "New password is required!" })} />
                        {errors.newPass && (
                            <p style={{ color: "red" }}>{errors.newPass.message}</p>
                        )}
                    </label>
                    <label className="settingsPassword__label">
                        <h3>Confirm new password</h3>
                        <input className="settingsPassword__input" type="password" name="newPassConf" {...register("newPassConf", {
                            required: "Please confirm password!",
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { newPass } = getValues();
                                    return newPass === value || "Passwords should match!";
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
