import React from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'

import "./UserPage.css"



function UserPage() {
    return (
        <div className='userpage'>
            <ProfileNavbar />
            <ProfileOverview />
            <ProfileSettings /> 
            <Footer />
        </div>
    )
}

export default UserPage

