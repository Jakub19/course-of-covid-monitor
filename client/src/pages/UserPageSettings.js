import React from 'react'
import Footer from '../components/Footer'
import ProfileSettings from '../components/ProfileSettings'
import ProfileNavbarSet from '../components/ProfileNavbarSet'

import "../components/UserPageSettings.css"


function UserPage() {
    return (
        <div className='userpage'>
            <ProfileNavbarSet />
            <ProfileSettings />
            <Footer />
        </div>
    )
}

export default UserPage

