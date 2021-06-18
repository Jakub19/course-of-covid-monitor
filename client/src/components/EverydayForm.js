import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import './EverydayForm.css'

function EverydayForm(props) {
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const API_URL = "http://localhost:8080";

    const onSubmit = async (data) => {
        const { covidPositiveSince, birthDate, gender, heightstr, weightstr, bloodType, isNotifOn } = data;
        let height = parseInt(heightstr, 10);
        let weight = parseInt(weightstr, 10);

        return axios.post(API_URL + "/api/HealthInformationOverviews", {
            covidPositiveSince, birthDate, height, weight, gender, bloodType, isNotifOn
        }, {
            headers: authHeader()
        }).then(async (response) => {
            console.log(response);
            history.go(0);
        });
    };


    return (
        <div className="everydayForm">
            <div className="everydayForm__background"></div>
            <div className="everydayForm__card">
                <div className="everydayForm__header">
                    How are You feeling today?
                </div>

                <form className="everydayForm__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="everydayForm__inputs">
                        <label className="everydayForm__label">
                            <h3>Body temperature</h3>
                            <input className="everydayForm__input" type="number" required="required" name="temperature" placeholder="°C" {...register("temperature")} />
                        </label>
                        <label className="everydayForm__label">
                            <h3>Blood pressure</h3>
                            <input className="everydayForm__input" type="number" required="required" name="bloodPressure" placeholder="%" {...register("bloodPressure")} />
                        </label>
                        <label className="everydayForm__label">
                            <h3>Blood saturation</h3>
                            <input className="everydayForm__input" type="number" required="required" name="bloodSaturation" placeholder="%" min="0" max="100" {...register("bloodSaturation")} />
                        </label>
                        <label className="everydayForm__label">
                            <h3>Pulse</h3>
                            <input className="everydayForm__input" type="number" required="required" name="pulse" placeholder="bpm" min="0" max="300" step="1" {...register("pulse")} />
                        </label>
                    </div>

                    <h3>Symptoms</h3>
                    <div className="everydayForm__symptoms">
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="lossOfTaste--chkbx" {...register("lossOfTaste--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Loss of taste</h3>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="headache--chkbx" {...register("headache--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Headache</h3>
                            <input className="everydayForm__symptom--input" type="range" name="headache" min="1" max="5" {...register("headache")} />
                            <span>5</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="runningNose--chkbx" {...register("runningNose--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Running nose</h3>
                            <input className="everydayForm__symptom--input" type="range" name="runningNose" min="1" max="5" {...register("runningNose")} />
                            <span>5</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="musclePain--chkbx" {...register("musclePain--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Muscle pain</h3>
                            <input className="everydayForm__symptom--input" type="range" name="musclePain" min="1" max="5" {...register("musclePain")} />
                            <span>5</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="dryCough--chkbx" {...register("dryCough--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Dry Cough</h3>
                            <input className="everydayForm__symptom--input" type="range" name="dryCough" min="1" max="5" {...register("dryCough")} />
                            <span>5</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="fatigue--chkbx" {...register("fatigue--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Fatigue</h3>
                            <input className="everydayForm__symptom--input" type="range" name="fatigue" min="1" max="5" {...register("fatigue")} />
                            <span>5</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="diffBreathing--chkbx" {...register("diffBreathing--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Breathing difficulties</h3>
                            <input className="everydayForm__symptom--input" type="range" name="diffBreathing" min="1" max="5" {...register("diffBreathing")} />
                            <span>5</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="chestPain--chkbx" {...register("chestPain--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Chest pain</h3>
                            <input className="everydayForm__symptom--input" type="range" name="chestPain" min="1" max="5" {...register("chestPain")} />
                            <span>5</span>
                        </label>
                    </div>
                    <div className="everydayForm__buttons">
                        <input className="everydayForm__submit" type="submit" value="Submit" />
                        <input className="everydayForm__cancel" value="Cancel" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EverydayForm
