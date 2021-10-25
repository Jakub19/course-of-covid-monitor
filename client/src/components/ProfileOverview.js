import React from 'react'
import ProfileTop from '../components/ProfileTop'
import './ProfileOverview.css'

function ProfileOverview(props) {

    return (
        <div className='profileOverview'>
            <ProfileTop userHealthInf={props.userHealthInf}/>
        </div>           
    ) 
}

export default ProfileOverview
