import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import { UserContext } from '../services/UserContext';
import './SetupForm.css'

function SetupForm(props) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let history = useHistory();
    const { API_URL} = useContext(UserContext);;

    const onSubmit = async (data) => {
        const {covidPositiveSince, birthDate, gender, heightStr, weightStr, bloodType, isNotifOn} = data;
        let height = parseInt(heightStr,10);
        let weight = parseInt(weightStr,10);

        return axios.post(API_URL + "/api/HealthInformationOverviews", {
            covidPositiveSince, birthDate, height, weight, gender, bloodType, isNotifOn},{headers: authHeader()
        }).then(async (response) => {
            console.log(response);
            history.go(0);
        });
    };
    

    return (
        <div className="setupForm">
            <div className="setupForm__background"></div>
            <div className="setupForm__card">
                <div className="setupForm__header">
                    Enter health information
                </div>
                <form className="setupForm__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="setupForm__inputs">
                        <label className="setupForm__label">
                            <h3>COVID positive since</h3>
                            <input className="setupForm__input" type="date" required="required" name="covidPositiveSince"  {...register("covidPositiveSince")} />
                        </label>
                        <label className="setupForm__label">
                            <h3>Birth Date</h3>
                            <input className="setupForm__input" type="date" required="required" name="birthDate" {...register("birthDate")} />
                        </label>
                        <label className="setupForm__label">
                            <h3>Height</h3>
                            <input className="setupForm__input" type="number" required="required" name="heightStr" placeholder="cm" min="10" max="300" {...register("heightStr", { minLength: 2, maxLength: 3 })} />
                        </label>
                        <label className="setupForm__label">
                            <h3>Weight</h3>
                            <input className="setupForm__input" type="number" required="required" name="weightStr" placeholder="kg" min="10" max="500" step="1" {...register("weightStr", { minLength: 2, maxLength: 3 })} />
                        </label>
                        <label className="setupForm__label">
                            <h3>Gender</h3>
                            <select className='setupForm__input' required="required" {...register("gender")}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label className="setupForm__label">
                            <h3>Blood type</h3>
                            <select className='setupForm__input' required="required"{...register("bloodType")}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="dk">Don't know</option>
                            </select>
                        </label>
                    </div>
                    <div className="setupForm__agreements">
                        <label><input className="setupForm__checkbox" type="checkbox" required="required" name="terms" id="terms" />I accept CovidMonitor Terms & Condition</label>
                        <label><input className="setupForm__checkbox" type="checkbox" name="isNotifOn" id="isNotifOn" {...register("isNotifOn")} />I want to receive email reminders to fill forms</label>
                        <span>{errors.heightStr && "Invalid height!"}</span>
                        <span>{errors.weightStr && "Invalid weight!"}</span>
                    </div>
                    <div className="setupForm__buttons">
                        <input className="setupForm__submit" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SetupForm
