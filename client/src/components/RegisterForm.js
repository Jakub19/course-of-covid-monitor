import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import AuthService from '../services/authService';
import './RegisterForm.css'

function RegisterForm(props) {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");


    const handleRegister = (data) => {
        AuthService.register(data.fname, data.lname, data.password, data.email, data.phoneNumber, data.address, data.city, data.postalCode).then(
            (response) => {
                setMessage(response.data.message);
                AuthService.login(data.email, data.password).then(
                    () => {
                        props.history.push("/profile");
                        window.location.reload();
                    }
                )
            },
            (error) => {
                setMessage(error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                console.log(message);
            }
        );
    };

    return (
        <div className="registerForm">
            <div className="registerForm__card">
                <div className="registerForm__header">
                    Registration form
                </div>
                <form className="registerForm__form" onSubmit={handleSubmit(handleRegister)}>
                    <div className="registerForm__inputs">
                        <label className="registerForm__label">
                            <h3>Name</h3>
                            <input className="registerForm__input" type="text" required="required" placeholder="First name" name="fname "   {...register("fname", { maxLength: 20 })} />
                            <input className="registerForm__input" type="text" required="required" placeholder="Last name" name="lname"  {...register("lname", { maxLength: 20 })} />
                            {errors.firstName && (
                                <p style={{ color: "red" }}>{errors.firstName.message}</p>
                            )}
                        </label>
                        <label className="registerForm__label">
                            <h3>Password</h3>
                            <input className="registerForm__input" type="password" required="required" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" {...register("password")} />
                            {errors.pass && (
                                <p style={{ color: "red" }}>{errors.pass.message}</p>
                            )}
                            <h3 className="registerForm__h3--center">Confirm password</h3>
                            <input className="registerForm__input" type="password" required="required" name="passConf" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" {...register("passConf", {
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }
                                }
                            })}
                            />
                            {errors.passConf && (
                                <p style={{ color: "red" }}>
                                    {errors.passConf.message}
                                </p>
                            )}
                        </label>
                        <label className="registerForm__label">
                            <h3>E-mail</h3>
                            <input className="registerForm__input" type="email" required="required" name="email" {...register("email")} />
                            {errors.email && (
                                <p style={{ color: "red" }}>{errors.email.message}</p>
                            )}
                            <h3 className="registerForm__h3--center">Phone number</h3>
                            <input className="registerForm__input" type="tel" required="required" name="phoneNumber" {...register("phoneNumber")} />
                            {errors.phoneNumber && (
                                <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                            )}
                        </label>
                        <label className="registerForm__label">
                            <h3>Address</h3>
                            <input className="registerForm__input" type="text" required="required" name="address" {...register("address")} />
                            {errors.address && (
                                <p style={{ color: "red" }}>{errors.address.message}</p>
                            )}
                        </label>
                        <label className="registerForm__label">
                            <h3>City</h3>
                            <input className="registerForm__input" type="text" required="required" name="city"{...register("city")} />
                            {errors.city && (
                                <p style={{ color: "red" }}>{errors.city.message}</p>
                            )}
                            <h3 className="registerForm__h3--center">Postal code</h3>
                            <input className="registerForm__input" type="text" required="required" name="postalCode" {...register("postalCode")} />
                            {errors.zip && (
                                <p style={{ color: "red" }}>{errors.zip.message}</p>
                            )}
                        </label>
                    </div>
                    <div className="registerForm__buttons">
                        <input className="registerForm__submit" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
