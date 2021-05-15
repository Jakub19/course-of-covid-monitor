import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import './ProfileOverview.css'

function ProfileOverview() {
    return (
        <div className='profileOverview'>
            <ProfileAvatar />
            <div className="profileOverview__card">
                <div className="profileOverview__card--headline">
                    Jan Kowalski
                    </div>
                <div className="profileOverview__card--container">
                    <div className="profileOverview__card--row">
                        <h4>COVID positive since: </h4><p>2.05.2021</p>
                    </div>
                    <div className="profileOverview__card--row">
                        <h4>End of quarantine: </h4><p>18.05.2021</p>
                    </div>
                    <div className="profileOverview__card--row">
                        <h4>Form submitted: </h4><p>5 times</p>
                    </div>
                </div>
            </div>
        </div>
              
    )
   
}

export default ProfileOverview
