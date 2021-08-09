import axios from 'axios';
import React, { useContext, useState } from 'react'
import useForm from "../services/useForm";
import { useHistory } from 'react-router-dom';
import authHeader from '../services/authHeader';
import { UserContext } from '../services/UserContext';
import './DailyForm.css'

function DailyForm(props) {
    let history = useHistory();
    const { API_URL } = useContext(UserContext);
    
    const [lossOfTasteChkbx, setLossOfTasteChkbx] = useState(false)
    const [headacheChkbx, setHeadacheChkbx] = useState(false)
    const [runningNoseChkbx, setRunningNoseChkbx] = useState(false)
    const [musclePainChkbx, setMusclePainChkbx] = useState(false)
    const [dryCoughChkbx, setDryCoughChkbx] = useState(false)
    const [fatigueChkbx, setFatigueChkbx] = useState(false)
    const [diffBreathingChkbx, setDiffBreathingChkbx] = useState(false)
    const [chestPainChkbx, setChestPainChkbx] = useState(false)

    let initialValues = {
        headache: "1",
        runningNose: "1",
        musclePain: "1",
        dryCough: "1",
        fatigue: "1",
        lossOfTaste: "1",
        diffBreathing: "1",
        chestPain: "1",
    }

    const { values, handleChange } = useForm(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitForm(values);
    }

    const submitForm = async (data) => {
        let { id, ownerId, temperature, bloodPressure, saturation, pulse, headache, runningNose, musclePain, dryCough, fatigue, lossOfTaste, diffBreathing, chestPain } = data;

        temperature = parseFloat(temperature);
        saturation = parseInt(saturation);
        pulse = parseInt(pulse);
        headache = headacheChkbx ? parseInt(headache): 0;
        runningNose = runningNoseChkbx ? parseInt(runningNose): 0;
        musclePain = musclePainChkbx ? parseInt(musclePain): 0;
        dryCough = dryCoughChkbx ? parseInt(dryCough): 0;
        fatigue = fatigueChkbx ? parseInt(fatigue): 0;
        lossOfTaste = lossOfTasteChkbx ? parseInt(lossOfTaste): 0;
        diffBreathing = diffBreathingChkbx ? parseInt(diffBreathing): 0;
        chestPain = chestPainChkbx ? parseInt(chestPain): 0;

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
                            <input className="dailyForm__input" type="number" required="required" name="temperature" placeholder="°C" step="0.1" min="30" max="45" value={values.temperature} onChange={handleChange} />
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
                    <h2>Symptoms</h2>
                    <div className="dailyForm__symptoms">
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="lossOfTasteChkbx" checked={lossOfTasteChkbx} onChange={() =>setLossOfTasteChkbx(!lossOfTasteChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Loss of taste</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="lossOfTaste" min="1" max="3" disabled={!lossOfTasteChkbx} value={values.lossOfTaste} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="headacheChkbx" checked={headacheChkbx} onChange={() =>setHeadacheChkbx(!headacheChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Headache</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="headache" min="1" max="3" disabled={!headacheChkbx} value={values.headache} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="runningNoseChkbx" checked={runningNoseChkbx} onChange={() =>setRunningNoseChkbx(!runningNoseChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Running nose</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="runningNose" min="1" max="3" disabled={!runningNoseChkbx} value={values.runningNose} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="musclePainChkbx" checked={musclePainChkbx} onChange={() =>setMusclePainChkbx(!musclePainChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Muscle pain</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="musclePain" min="1" max="3" disabled={!musclePainChkbx} value={values.musclePain} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="dryCoughChkbx" checked={dryCoughChkbx} onChange={() =>setDryCoughChkbx(!dryCoughChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Dry Cough</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="dryCough" min="1" max="3" disabled={!dryCoughChkbx} value={values.dryCough} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="fatigueChkbx" checked={fatigueChkbx} onChange={() =>setFatigueChkbx(!fatigueChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Fatigue</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="fatigue" min="1" max="3" disabled={!fatigueChkbx} value={values.fatigue} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="diffBreathingChkbx" checked={diffBreathingChkbx} onChange={() =>setDiffBreathingChkbx(!diffBreathingChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Breathing difficulties</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="diffBreathing" min="1" max="3" disabled={!diffBreathingChkbx} value={values.diffBreathing} onChange={handleChange} />
                            <span>3</span>
                        </label>
                        <label className="dailyForm__symptom">
                            <div className="dailyForm__switch">
                                <input className="dailyForm__checkbox" type="checkbox" name="chestPainChkbx" checked={chestPainChkbx} onChange={() =>setChestPainChkbx(!chestPainChkbx)} />
                                <span className="dailyForm__slider"></span>
                            </div>
                            <h3>Chest pain</h3>
                            <span>1</span>
                            <input className="dailyForm__symptom--input" type="range" name="chestPain" min="1" max="3" disabled={!chestPainChkbx} value={values.chestPain} onChange={handleChange} />
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
