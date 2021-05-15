import React from 'react'
import logo from '../images/logos/logo.svg'
import "./ProfileNavbarSet.css"

function ProfileNavbarSet() {
    return (
        <nav className="profileNavbar">
            <img className="profileNavbar__logo" src={logo} alt="logo" />
            <ul className="tab">
                <span className="tab__indicator"></span>
                <li className="tab__button" id="btn1"><p>Overview</p></li>
                <li className="tab__button tab__button--active">Settings</li>
            </ul>
            <div className="profileNavbar__profile--container">
                <div className="profileNavbar__profile--icon"></div>
                <div className="profileNavbar__profile--username">Jan Kowalski</div>
            </div>
        </nav>
    )
}

export default ProfileNavbarSet
