import React from 'react'
import logo from '../images/logos/logo.svg'
import {Link } from 'react-router-dom';
import './ProfileNavbar.css'

function ProfileNavbar() {
    return (
        <nav className="profileNavbar">
            <Link to={'/'}><img className="profileNavbar__logo" src={logo} alt="logo" /></Link>
            <ul className="tab">
                <span className="tab__indicator"></span>
                <li className="tab__button tab__button--active" id="btn1"><p>Overview</p></li>
                <li className="tab__button">Settings</li>
            </ul>
            <div className="profileNavbar__profile--container">
                <div className="profileNavbar__profile--icon"></div>
                <div className="profileNavbar__profile--username">Jan Kowalski</div>
            </div>
        </nav>
    )
}

export default ProfileNavbar
