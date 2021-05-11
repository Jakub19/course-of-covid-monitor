import React from 'react'
import Footer from '../components/Footer'
import ProfileBackground from '../components/ProfileBackground'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSummary from '../components/ProfileSummary'


function UserPage() {
    return (
        <div>
            <ProfileBackground />
            <ProfileNavbar />
            <ProfileOverview />
            <ProfileSummary />
            <Footer />
        </div>
    )
}

export default UserPage

