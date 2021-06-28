import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import { UserContext } from '../services/UserContext';
import './EverydayForm.css'

function EverydayForm() {
    const { register, handleSubmit, watch} = useForm();
    let history = useHistory();
    const { API_URL} = useContext(UserContext);

    const onSubmit = async (data) => {
        const { id, ownerId, temperature, bloodPressure, saturation, pulse, headache, runningNose, musclePain, dryCough, fatigue, lossOfTaste, diffBreathing, chestPain } = data;

        return axios.post(API_URL + "/api/DailyInformationForm", {
            id, ownerId, temperature, bloodPressure, saturation, pulse, headache, runningNose, musclePain, dryCough, fatigue, lossOfTaste, diffBreathing, chestPain
        }, { headers: authHeader() })
            .then(async (response) => {
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
                            <input className="everydayForm__input" type="number" required="required" name="saturation" placeholder="%" min="0" max="100" {...register("saturation")} />
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
                            <input className="everydayForm__symptom--input" type="range" name="headache" min="1" max="3" {...register("headache")} />
                            <span>{watch('headache')}</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="runningNose--chkbx" {...register("runningNose--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Running nose</h3>
                            <input className="everydayForm__symptom--input" type="range"  name="runningNose" min="1" max="3" {...register("runningNose")} />
                            <span>{watch('runningNose')}</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="musclePain--chkbx" {...register("musclePain--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Muscle pain</h3>
                            <input className="everydayForm__symptom--input" type="range" name="musclePain" min="1" max="3" {...register("musclePain")} />
                            <span>{watch('musclePain')}</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="dryCough--chkbx" {...register("dryCough--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Dry Cough</h3>
                            <input className="everydayForm__symptom--input" type="range" name="dryCough" min="1" max="3" {...register("dryCough")} />
                            <span>{watch('dryCough')}</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="fatigue--chkbx" {...register("fatigue--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Fatigue</h3>
                            <input className="everydayForm__symptom--input" type="range" name="fatigue" min="1" max="3" {...register("fatigue")} />
                            <span>{watch('fatigue')}</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="diffBreathing--chkbx" {...register("diffBreathing--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Breathing difficulties</h3>
                            <input className="everydayForm__symptom--input" type="range" name="diffBreathing" min="1" max="3" {...register("diffBreathing")} />
                            <span>{watch('diffBreathing')}</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="chestPain--chkbx" {...register("chestPain--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Chest pain</h3>
                            <input className="everydayForm__symptom--input" type="range" name="chestPain" min="1" max="3" {...register("chestPain")} />
                            <span>{watch('chestPain')}</span>
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
