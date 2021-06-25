import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import { UserContext } from '../services/UserContext';
import './SettingsAccount.css'


function SettingsAccount(props) {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const { API_URL} = useContext(UserContext);;
    const history = useHistory()

    const onSubmit = async (data) => {
        const { name, surname, email, phoneNumber, address, city } = data;

        return axios.put(API_URL + "/api/Authenticate/UpdateUserDetails", {
            name, surname, email, phoneNumber, address, city
        }, {
            headers: authHeader()
        }).then(async (response) => {
            history.go(0)
            await props.getProfileDetails() 
            console.log(response)
        });
    };

    useEffect(() => {
        setValue('name', props.data.name);
        setValue('surname', props.data.surname);
        setValue('email', props.data.email);
        setValue('phoneNumber', props.data.phoneNumber);
        setValue('address', props.data.address);
        setValue('city', props.data.city);
        setValue('fname', props.data.name);
    })

    return (
        <div className="settingsAccount">
            <h1 className="settingsAccount__h1">Account settings</h1>
            <form className="settingsAccount__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="settingsAccount__inputs">
                    <label className="settingsAccount__label">
                        <h3>First name</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="name" {...register("name", { maxLength: 20 })} defaultValue={props.data.name} />
                        {errors.name && (
                            <p style={{ color: "red" }}>{errors.name.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Last name</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="surname" {...register("surname", { maxLength: 20 })} defaultValue={props.data.surname} />
                        {errors.surname && (
                            <p style={{ color: "red" }}>{errors.surname.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>E-mail</h3>
                        <input className="settingsAccount__input" type="email" required="required" name="email" {...register("email")} defaultValue={props.data.email} />
                        {errors.email && (
                            <p style={{ color: "red" }}>{errors.email.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Phone number</h3>
                        <input className="settingsAccount__input" type="tel" required="required" name="phoneNumber" pattern="[0-9]{9}" {...register("phoneNumber")} defaultValue={props.data.phoneNumber} />
                        {errors.phoneNumber && (
                            <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>Address</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="address" {...register("address")} defaultValue={props.data.address} />
                        {errors.address && (
                            <p style={{ color: "red" }}>{errors.address.message}</p>
                        )}
                    </label>
                    <label className="settingsAccount__label">
                        <h3>City</h3>
                        <input className="settingsAccount__input" type="text" required="required" name="city" {...register("city")} defaultValue={props.data.city} />
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
