import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import AuthService from '../services/authService';
import './RegisterForm.css'

function RegisterForm() {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeSurname = (e) => {
        const surname = e.target.value;
        setSurname(surname);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
    };

    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };

    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
    };

    const onChangePostalCode = (e) => {
        const postalCode = e.target.value;
        setPostalCode(postalCode);
    };

    const handleRegister = (data) => {

        setSuccessful(false);

        AuthService.register(data.name, data.surname, data.password, data.email, data.phoneNumber, data.address, data.city, data.postalCode).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
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
                            <input className="registerForm__input" type="text" required="required" placeholder="First name" name="name"  {...register("name", { maxLength: 20 })} />
                            <input className="registerForm__input" type="text" required="required" placeholder="Last name" name="surname"  {...register("surname", { maxLength: 20 })} />
                            {errors.firstName && (
                                <p style={{ color: "red" }}>{errors.firstName.message}</p>
                            )}
                        </label>
                        <label className="registerForm__label">
                            <h3>Password</h3>
                            <input className="registerForm__input" type="password" required="required" name="password"  {...register("password")} />
                            {errors.pass && (
                                <p style={{ color: "red" }}>{errors.pass.message}</p>
                            )}
                            <h3 className="registerForm__h3--center">Confirm password</h3>
                            <input className="registerForm__input" type="password" required="required" name="passConf" {...register("passConf", {
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
