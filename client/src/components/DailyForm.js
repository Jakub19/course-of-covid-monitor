import axios from 'axios';
import React, { useContext } from 'react'
import useForm from "../services/useForm";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import { UserContext } from '../services/UserContext';
import './DailyForm.css'

function DailyForm(props) {
    let history = useHistory();
    const { API_URL } = useContext(UserContext);

    const { values, handleChange } = useForm({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitForm(values);
    }

    const submitForm = async (data) => {
        let { id, ownerId, temperature, bloodPressure, saturation, pulse, headache, runningNose, musclePain, dryCough, fatigue, lossOfTaste, diffBreathing, chestPain } = data;

        temperature = parseFloat(temperature);
        saturation = parseInt(saturation);
        pulse = parseInt(pulse);
        headache = parseInt(headache);
        runningNose = parseInt(runningNose);
        musclePain = parseInt(musclePain);
        dryCough = parseInt(dryCough);
        fatigue = parseInt(fatigue);
        lossOfTaste = parseInt(lossOfTaste);
        diffBreathing = parseInt(diffBreathing);
        chestPain = parseInt(chestPain);

        return axios.post(API_URL + "/api/DailyInformationForm", {
            id, ownerId, temperature, bloodPressure, saturation, pulse, headache, runningNose, musclePain, dryCough, fatigue, lossOfTaste, diffBreathing, chestPain
        }, { headers: authHeader() })
            .then(async (response) => {
                console.log(response);
                history.go(0);
            }).catch((err) => {
                console.log(err)
            });
    };

    const isChckd = (id) => {
        if (document.getElementsByName(id + "Chkbx")[0]) {
            return !document.getElementsByName(id + "Chkbx")[0].checked
        } else return
    }

    return (
        <div className="dailyForm">
            <div className="dailyForm__background"></div>
            <div className="dailyForm__card">
                <div className="dailyForm__header">
                    How are You feeling today?
                </div>

                <form className="dailyForm__form" onSubmit={handleSubmit}>
                    <div className="dailyForm__inputs">
                        <label className="dailyForm__label">
                            <h3>Body temperature</h3>
                            <input className="dailyForm__input" type="number" required="required" name="temperature" placeholder="°C" step="1" min="30" max="45" value={values.temperature} onChange={handleChange} />
                        </label>
                        <label className="dailyForm__label">
                            <h3>Blood pressure</h3>
                            <input className="dailyForm__input" type="text" required="required" name="bloodPressure" placeholder="x/x" pattern='^\d{1,3}\/\d{1,3}$' value={values.bloodPressure} onChange={handleChange} />
                        </label>
                        <label className="dailyForm__label">
                            <h3>Blood saturation</h3>
                            <input className="dailyForm__input" type="number" required="required" name="saturation" placeholder="%" min="0" max="100" step="1" value={values.saturation} onChange={handleChange} />
                        </label>
                        <label className="dailyForm__label">
                            <h3>Pulse</h3>
                            <input className="dailyForm__input" type="number" required="required" name="pulse" placeholder="bpm" min="0" max="300" step="1" value={values.pulse} onChange={handleChange} />
                        </label>
                    </div>

                    <h3>Symptoms</h3>
                    <div className="dailyForm__symptoms">
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="lossOfTasteChkbx" value={values.lossOfTasteChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Loss of taste</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="lossOfTaste" min="1" max="3" disabled={isChckd("lossOfTaste")} value={values.lossOfTaste} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="headacheChkbx" value={values.headacheChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Headache</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="headache" min="1" max="3" disabled={isChckd("headache")} value={values.headache} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="runningNoseChkbx" value={values.runningNoseChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Running nose</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="runningNose" min="1" max="3" disabled={isChckd("runningNose")} value={values.runningNose} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="musclePainChkbx" value={values.musclePainChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Muscle pain</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="musclePain" min="1" max="3" disabled={isChckd("musclePain")} value={values.musclePain} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="dryCoughChkbx" value={values.dryCoughChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Dry Cough</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="dryCough" min="1" max="3" disabled={isChckd("dryCough")} value={values.dryCough} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="fatigueChkbx" value={values.fatigueChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Fatigue</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="fatigue" min="1" max="3" disabled={isChckd("fatigue")} value={values.fatigue} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="diffBreathingChkbx" value={values.diffBreathingChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Breathing difficulties</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="diffBreathing" min="1" max="3" disabled={isChckd("diffBreathing")} value={values.diffBreathing} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="chestPainChkbx" value={values.chestPainChkbx} onChange={handleChange} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Chest pain</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" defaultValue="1" name="chestPain" min="1" max="3" disabled={isChckd("chestPain")} value={values.chestPain} onChange={handleChange} />
                            <span>3</span>
                        </label>
                    </div>
                    <div className="dailyForm__buttons">
                        <input className="dailyForm__submit" type="submit" value="Submit" />
                        <input className="dailyForm__cancel" type="reset" value="Cancel" onClick={() => props.setShowForm(false)} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DailyForm
