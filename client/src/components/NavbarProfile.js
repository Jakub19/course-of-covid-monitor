import React from 'react'
import logo from '../images/logos/logo.svg'
import "./NavbarProfile.css"

function NavbarProfile() {
    return (
        <nav className="navbarProfile">
            <img className="navbarProfile__logo" src={logo} alt="logo" />
            <div className="navbarProfile__buttons">
                <button className="navbarProfile__button" id="btn1"><div className="navbarProfile__button--box"></div><p>Overview</p>  </button>
                <button className="navbarProfile__button">Settings</button>
            </div>
            <div className="navbarProfile__profile--container">
                <div className="navbarProfile__profile--icon"></div>
                <div className="navbarProfile__profile--username">Jan Kowalski</div>
            </div>

        </nav>
    )
}

export default NavbarProfile
