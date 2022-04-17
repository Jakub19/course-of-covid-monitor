import React, { useEffect, useState } from 'react'
import profileDetails from '../services/profileDetails'
import Avatar from './Avatar'
import './ProfileTop.css'

function ProfileTop(props) {

    const [positiveSince, setPositiveSince] = useState('')
    const [endOfquarantine, setEndOfquarantine] = useState('')
    const [daysLeft, setdaysLeft] = useState('')
    const { data, setData, getProfileDetails } = profileDetails()

    const quarantineLength = 14;

    const setDates = () => {
        if (props.userHealthInf) {
            let userHealthInf = props.userHealthInf;
            const oneDay = 24 * 60 * 60 * 1000;
            let since = new Date(userHealthInf.covidPositiveSince);
            let end = new Date(userHealthInf.covidPositiveSince);
            let today = new Date();

            end.setDate(end.getDate() + quarantineLength);
            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [day, month, year].join('-');
            }

            const diffDays = Math.round(Math.abs((today - end) / oneDay));

            setdaysLeft(diffDays)
            setPositiveSince(formatDate(since))
            setEndOfquarantine(formatDate(end))
        } else {
            setdaysLeft('No data')
            setPositiveSince('No data')
            setEndOfquarantine('No data')
        }
    };

    useEffect(() => {
        setData(getProfileDetails());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setDates();
    })

    return (
        <div className="profileTop">
            <Avatar />
            <div className="profileTop__card">
                <div className="profileTop__card--headline">
                    {data.name + ' ' + data.surname}
                </div>
                <div className="profileTop__card--container">
                    <div className="profileTop__card--row">
                        <h4>COVID positive since: </h4><p>{positiveSince}</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>End of quarantine: </h4><p>{endOfquarantine}</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>Days left: </h4><p>{daysLeft}</p>
                    </div>
                </div>
            </div>
            <div className="profileTop__card--reminder">
                <div className="profileTop__card--reminderContainer"><h3 className="profileTop__card--reminderText">Form is awaiting completion</h3></div>
                <button className="profileTop__card--button" onClick={() => props.setHandleShowForm(true)}>Fill now</button>
            </div>
        </div>
    )
}

export default ProfileTop
