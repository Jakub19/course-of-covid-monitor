import React from 'react'
import HistoryCard from './HistoryCard'
import HistoryCardArea from './HistoryCardArea'
import './ProfileHistory.css'

function ProfileHistory(props) {

    const prepareData = (dataName) => {   
        if (props.data){
            if(dataName === 'bloodPressure') {
                return props.data.map(item => [[new Date(item.filledDate), parseInt(item[dataName].split('/')[0])],[new Date(item.filledDate), parseInt(item[dataName].split('/')[1])]])
            }else{
                return props.data.map(item => [new Date(item.filledDate), item[dataName]])
            } 
        }else{
            return ''
        }
        
    }

    return (
        <div className="profileHistory">
            <h1 className="profileHistory__h1">
                Your health history
            </h1>
            <div className="profileHistory__container">
                <HistoryCard data={prepareData('temperature')} name='Temperature' />
                <HistoryCard data={prepareData('saturation')} name='Blood saturation' />
                <HistoryCardArea data={prepareData('bloodPressure')} type='area' name='Blood pressure' valueName1='Systolic pressure' valueName2='Diastolic pressure' />
                <HistoryCard data={prepareData('pulse')} name='Pulse' />
            </div>
        </div>
    )
}

export default ProfileHistory
