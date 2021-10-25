import React from 'react'
import useForm from "../services/useForm";
import useAuth from '../services/useAuth';
import './RegisterForm.css'

function RegisterForm() {
    const { values, handleChange } = useForm({
        initialValues: {
            name: '',
            surname: '',
            password: '',
            email: '',
            phoneNumber: '',
            address: '',
            city: '',
            postalCode: ''
        }
    });

    const { registerUser, error } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        await registerUser(values);
    }

    return (
        <div className="registerForm">
            <div className="registerForm__card">
                <div className="registerForm__header">
                    Rejestracja
                </div>
                <form className="registerForm__form" onSubmit={handleRegister}>
                    <div className="registerForm__inputs">
                        <label className="registerForm__label">
                        <h3>Imię <br/> i nazwisko</h3>
                            <input className="registerForm__input" type="text" required="required" placeholder="Imię" name="name" autoComplete="given-name" value={values.name} onChange={handleChange} />
                            <input className="registerForm__input" type="text" required="required" placeholder="Nazwisko" name="surname" autoComplete="family-name" value={values.surname} onChange={handleChange} />
                        </label>
                        <label className="registerForm__label">
                            <h3>Hasło</h3>
                            <input className="registerForm__input" type="password" required="required" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={values.password} onChange={handleChange} />
                            <h3 className="registerForm__h3--center">Potwierdź hasło</h3>
                            <input className="registerForm__input" type="password" required="required" name="passConf" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                        </label>
                        <label className="registerForm__label">
                            <h3>E-mail</h3>
                            <input className="registerForm__input" type="email" required="required" name="email" value={values.email} onChange={handleChange} />
                            <h3 className="registerForm__h3--center">Telefon</h3>
                            <input className="registerForm__input" type="tel" required="required" name="phoneNumber" pattern="[0-9]{9}" value={values.phoneNumber} onChange={handleChange} />
                        </label>
                        <label className="registerForm__label">
                            <h3>Ulica i nr domu/mieszkania</h3>
                            <input className="registerForm__input" type="text" required="required" name="address" value={values.address} onChange={handleChange} />
                        </label>
                        <label className="registerForm__label">
                            <h3>Miasto</h3>
                            <input className="registerForm__input" type="text" required="required" name="city" value={values.city} onChange={handleChange} />
                            <h3 className="registerForm__h3--center">Kod pocztowy</h3>
                            <input className="registerForm__input" type="text" required="required" name="postalCode" value={values.postalCode} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="inlineForm__notif">
                        {error}
                    </div>
                    <div className="registerForm__buttons">
                        <input className="registerForm__submit" type="submit" value="Zarejestruj" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
