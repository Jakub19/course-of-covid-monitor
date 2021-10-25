import React, { useEffect } from 'react'
import profileDetails from '../services/profileDetails'
import './ProfileTop.css'

function ProfileTop(props) {
    const { data, setData, getProfileDetails } = profileDetails()

    useEffect(() => {
        setData(getProfileDetails());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="profileTop">
            <div className="profileTop__card">
                <div className="profileTop__card--headline">
                    {data.name + ' ' + data.surname}
                </div>
                <div className="profileTop__card--container">
                   
                </div>
            </div>
        </div>
    )
}

export default ProfileTop
