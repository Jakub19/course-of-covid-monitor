import React from 'react'
import Calendar from './Calendar'
import SummaryCard from './SummaryCard'
import './ProfileSummary.css'

function ProfileSummary(props) {

    const prepareData = (dataName) => {
        if(props.data){
            if(props.data[0]){
                return props.data[props.data.length-1][dataName]
            }
            return
        }
    }

    return (
        <div className="profileSummary">
            <h1 className="profileSummary__h1">Summary</h1>
            <div className="profileSummary__container">
                <SummaryCard name="Temperature" value={prepareData('temperature')} range="36.3-36.7" unit='°C' />
                <SummaryCard name="Blood saturation" value={prepareData('saturation')} range="95-100" unit='%' />
                <SummaryCard name="Blood pressure" value={prepareData('bloodPressure')} range="90/60-120/80" />
                <SummaryCard name="Pulse" value={prepareData('pulse')} range="60-110" unit='bpm' />
                <Calendar />
            </div>
        </div>
    )
}

export default ProfileSummary
