import React from 'react'
import ProfileTop from '../components/ProfileTop'
import ProfileSummary from '../components/ProfileSummary'
import ProfileHistory from '../components/ProfileHistory'

import './ProfileOverview.css'

function ProfileOverview() {
    return (
        <div className='profileOverview'>
            <ProfileTop />
            <ProfileSummary />
            <ProfileHistory /> 
        </div>           
    ) 
}

export default ProfileOverview
