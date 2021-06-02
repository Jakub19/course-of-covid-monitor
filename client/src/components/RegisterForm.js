import React from 'react'
import { useForm } from "react-hook-form";
import './RegisterForm.css'

function RegisterForm() {

    const { register, handleSubmit, getValues, formState: { errors }} = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <div className="registerForm">
            <div className="registerForm__card">
                <div className="registerForm__header">
                    Registration form
                </div>
                <form className="registerForm__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="registerForm__inputs">
                    <label className="registerForm__label">
                        <h3>Name</h3>
                        <input className="registerForm__input" type="text" required="required" placeholder="First name" name="firstName" {...register("firstName",{maxLength: 20 })}/>
                        <input className="registerForm__input" type="text" required="required" placeholder="Last name" name="lastName" {...register("lastName",{maxLength: 20 })}/>
                        {errors.firstName && (
                            <p style={{ color: "red" }}>{errors.firstName.message}</p>
                        )}
                    </label>
                    <label className="registerForm__label">
                        <h3>Password</h3>
                        <input className="registerForm__input" type="password" required="required" name="pass" {...register("pass")} />
                        {errors.pass && (
                            <p style={{ color: "red" }}>{errors.pass.message}</p>
                        )}
                        <h3 className="registerForm__h3--center">Confirm password</h3>
                        <input className="registerForm__input" type="password" required="required" name="passConf" {...register("passConf", {
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { pass } = getValues();
                                    return pass === value || "Passwords should match!";
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
                        <input className="registerForm__input" type="email" required="required" name="email" {...register("email")}/>
                        {errors.email && (
                            <p style={{ color: "red" }}>{errors.email.message}</p>
                        )}
                        <h3 className="registerForm__h3--center">Phone number</h3>
                        <input className="registerForm__input" type="tel" required="required" name="phoneNumber" {...register("phoneNumber")}/>
                        {errors.phoneNumber && (
                            <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                        )}
                    </label>
                    <label className="registerForm__label">
                        <h3>Address</h3>
                        <input className="registerForm__input" type="text" required="required" name="address" {...register("address")}/>
                        {errors.address && (
                            <p style={{ color: "red" }}>{errors.address.message}</p>
                        )}
                    </label>
                    <label className="registerForm__label">
                        <h3>City</h3>
                        <input className="registerForm__input" type="text" required="required" name="city" {...register("city")}/>
                        {errors.city && (
                            <p style={{ color: "red" }}>{errors.city.message}</p>
                        )}
                        <h3 className="registerForm__h3--center">Postal code</h3>
                        <input className="registerForm__input" type="text"  required="required" name="zip" {...register("zip")}/>
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
