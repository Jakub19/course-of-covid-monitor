import React from 'react'
import HistoryCard from './HistoryCard'
import './ProfileHistory.css'

function ProfileHistory(props) {
    /*function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = '' + d.getFullYear(),
            hour = '' + d.getHours(),
            minutes = '' + d.getMinutes();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (hour.length < 2)
            hour = '0' + hour;
        if (minutes.length < 2)
            minutes = '0' + minutes;
        console.log(d)
        return [day, month, year].join('-') + ' ' + [hour, minutes].join(':');
    }*/

    const prepareData = (dataName) => {
        return props.data ? props.data.map(item => [new Date(item.filledDate), item[dataName]]) : '';
    }

    return (
        <div className="profileHistory">
            <h1 className="profileHistory__h1">
                Your health history
            </h1>
            <div className="profileHistory__container">
                <HistoryCard data={prepareData('temperature')} name='Temperature' />
                <HistoryCard data={prepareData('saturation')} name='Blood saturation' />
                <HistoryCard data={prepareData('bloodPressure')} name='Blood pressure' />
                <HistoryCard data={prepareData('pulse')} name='Pulse' />
            </div>
        </div>
    )
}

export default ProfileHistory
