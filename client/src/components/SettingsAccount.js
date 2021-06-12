import React from 'react'
import { useForm } from "react-hook-form";
import './SettingsAccount.css'

function SettingsAccount(props) {

    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <div className="settingsAccount">
            <h1 className="settingsAccount__h1">Account settings</h1>
            <form className="settingsAccount__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="settingsAccount__inputs">
                    <label className="settingsAccount__label">
                        <h3>First name</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="fname" {...register("fname",{ maxLength: 20 }) } defaultValue={props.data.name}/>
                        {errors.firstName && (
                            <p style={{ color: "red" }}>{errors.firstName.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Last name</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="lname" {...register("lname",{maxLength: 20 })} defaultValue={props.data.surname}/>
                        {errors.lastName && (
                            <p style={{ color: "red" }}>{errors.lastName.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>E-mail</h3>
                        <input className="settingsAccount__input" type="email" required="required" name="email" {...register("email")} defaultValue={props.data.email}/>
                        {errors.email && (
                            <p style={{ color: "red" }}>{errors.email.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Phone number</h3>
                        <input className="settingsAccount__input" type="tel" required="required" name="phoneNumber" {...register("phoneNumber")} defaultValue={props.data.phoneNumber}/>
                        {errors.phoneNumber && (
                            <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Address</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="address" {...register("address")} defaultValue={props.data.address}/>
                        {errors.address && (
                            <p style={{ color: "red" }}>{errors.address.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>City</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="city" {...register("city")} defaultValue={props.data.city}/>
                        {errors.city && (
                            <p style={{ color: "red" }}>{errors.city.message}</p>
                        )}
                    </label>
                </div>
                <div className="settingsAccount__buttons">
                    <input className="settingsAccount__submit" type="submit" value="Save" />
                    <input className="settingsAccount__cancel" type="button" onClick={() => reset()} value="Cancel" />
                </div>
            </form>
        </div>
    )
}

export default SettingsAccount
