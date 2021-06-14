import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../services/UserContext';
import Avatar from './Avatar'
import './ProfileTop.css'

function ProfileTop(props) {
    const { user } = useContext(UserContext);

    const [positiveSince, setPositiveSince] = useState('')
    const [endOfquarantine, setEndOfquarantine] = useState('')

    const quarantineLength = 14;

    const setDates = () => {

        if (props.userHealthInf) {
            let userHealthInf = props.userHealthInf;
            let since = new Date(userHealthInf.covidPositiveSince);
            let end = new Date(userHealthInf.covidPositiveSince);
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
            setPositiveSince(formatDate(since))
            setEndOfquarantine(formatDate(end))
        } else {
            setPositiveSince('No data')
            setEndOfquarantine('No data')
        }
    };

    useEffect(() => {
        setDates();
    })

    return (
        <div className="profileTop">
            <Avatar />
            <div className="profileTop__card">
                <div className="profileTop__card--headline">
                    {user.name + ' ' + user.surname}
                </div>
                <div className="profileTop__card--container">
                    <div className="profileTop__card--row">
                        <h4>COVID positive since: </h4><p>{positiveSince}</p>
                    </div>
                    <div className="profileTop__card--row">
                        <h4>End of quarantine: </h4><p>{endOfquarantine}</p>
                    </div>
                </div>
            </div>
            <div className="profileTop__card--reminder">
                <div className="profileTop__card--reminderContainer"><h3 className="profileTop__card--reminderText">Form is awaiting completion</h3></div>
                <button className="profileTop__card--button">Fill now</button>
            </div>
        </div>
    )
}

export default ProfileTop
