import React from 'react'
import Footer from '../components/Footer'
import ProfileBackground from '../components/ProfileBackground'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSummary from '../components/ProfileSummary'
import ProfileHistory from '../components/ProfileHistory'

import "../components/UserPage.css"


function UserPage() {
    return (
        <div className='userpage'>
            <ProfileBackground />
            <ProfileNavbar />
            <ProfileOverview />
            <ProfileSummary />
            <ProfileHistory />
            <Footer />
        </div>
    )
}

export default UserPage

