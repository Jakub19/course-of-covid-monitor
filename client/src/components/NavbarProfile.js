import React from 'react'
import logo from '../images/logos/logo.svg'
import "./NavbarProfile.css"

function NavbarProfile() {
    return (
        <nav className="navbarProfile">
            <img className="navbarProfile__logo" src={logo} alt="logo" />
            <ul className="tab">
            <span className="tab__indicator"></span>
                <li className="tab__button tab__button--active" id="btn1"><p>Overview</p></li>
                <li className="tab__button">Settings</li>
            </ul>
            <div className="navbarProfile__profile--container">
                <div className="navbarProfile__profile--icon"></div>
                <div className="navbarProfile__profile--username">Jan Kowalski</div>
            </div>

        </nav>
    )
}

export default NavbarProfile
