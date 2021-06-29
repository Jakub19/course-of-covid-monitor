import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import { UserContext } from '../services/UserContext';
import './EverydayForm.css'

function EverydayForm() {
    const { register, handleSubmit, watch } = useForm();
    let history = useHistory();
    const { API_URL } = useContext(UserContext);

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

    const isChckd = (id) => {
        return !watch(id + "--chkbx")
    }

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
                            <input className="everydayForm__input" type="number" required="required" name="temperature" placeholder="°C" step="1" min="30" max="45" {...register("temperature", {setValueAs: v => parseInt(v)})} />
                        </label>
                        <label className="everydayForm__label">
                            <h3>Blood pressure</h3>
                            <input className="everydayForm__input" type="number" required="required" name="bloodPressure" placeholder="%" {...register("bloodPressure")} />
                        </label>
                        <label className="everydayForm__label">
                            <h3>Blood saturation</h3>
                            <input className="everydayForm__input" type="number" required="required" name="saturation" placeholder="%" min="0" max="100" step="1" {...register("saturation", {setValueAs: v => parseInt(v)})} />
                        </label>
                        <label className="everydayForm__label">
                            <h3>Pulse</h3>
                            <input className="everydayForm__input" type="number" required="required" name="pulse" placeholder="bpm" min="0" max="300" step="1" {...register("pulse", {setValueAs: v => parseInt(v)})} />
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
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="lossOfTaste" min="1" max="3" disabled={isChckd("lossOfTaste")} {...register("lossOfTaste", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="headache--chkbx" {...register("headache--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Headache</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="headache" min="1" max="3" disabled={isChckd("headache")} {...register("headache", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="runningNose--chkbx" {...register("runningNose--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Running nose</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="runningNose" min="1" max="3" disabled={isChckd("runningNose")} {...register("runningNose", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="musclePain--chkbx" {...register("musclePain--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Muscle pain</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="musclePain" min="1" max="3" disabled={isChckd("musclePain")} {...register("musclePain", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="dryCough--chkbx" {...register("dryCough--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Dry Cough</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="dryCough" min="1" max="3" disabled={isChckd("dryCough")} {...register("dryCough", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="fatigue--chkbx" {...register("fatigue--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Fatigue</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="fatigue" min="1" max="3" disabled={isChckd("fatigue")} {...register("fatigue", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="diffBreathing--chkbx" {...register("diffBreathing--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Breathing difficulties</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="diffBreathing" min="1" max="3" disabled={isChckd("diffBreathing")} {...register("diffBreathing", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
                        </label>
                        <label className="everydayForm__symptom">
                            <div className="everydayForm__switch">
                                <input className="everydayForm__checkbox" type="checkbox" name="chestPain--chkbx" {...register("chestPain--chkbx")} />
                                <span class="everydayForm__slider"></span>
                            </div>
                            <h3>Chest pain</h3>
                            <span>1</span>
                            <input className="everydayForm__symptom--input" type="range" defaultValue="1" name="chestPain" min="1" max="3" disabled={isChckd("chestPain")} {...register("chestPain", {setValueAs: v => parseInt(v)})} />
                            <span>3</span>
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
