import React, { Component } from 'react'
import Avatar from './Avatar'
import SettingsAccount from './SettingsAccount'
import SettingsPassword from './SettingsPassword'
import SettingsNotifications from './SettingsNotifications'
import './ProfileSettings.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function ProfileSettings() {
    return (
        <Router>
        <div className="profileSettings">
            <div className='profileSettings__card'>
                <div className="profileSettings__nav">
                    <Avatar />
                    <h1 className="profileSettings__username">Jan Kowalski</h1>
                    <nav>
                    <ul className="profileSettings__list">
                        <li className="profileSettings__button profileSettings__button--active"><Link to={'/'}>Account</Link></li>
                        <li className="profileSettings__button "><Link to={'/password'}>Password</Link></li>
                        <li className="profileSettings__button" ><Link to={'/notifications'}>Notifications</Link></li>
                    </ul>
                    </nav>
                </div>
                <div className="profileSettings__content">
                <Switch>
                    <Route exact path="/" component={SettingsAccount} />
                    <Route path="/password" component={SettingsPassword} />
                    <Route path="/notifications" component={SettingsNotifications} />
                </Switch>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default ProfileSettings
