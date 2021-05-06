import React from 'react'
import logo from '../images/logos/logo.svg'
import './Navbar.css'

function Navbar(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="logo" />
            <div className="navbar__buttons">
                <button className="navbar__button">FAQ</button>
                {isLoggedIn
                    ? <div className="navbar__profile--container">
                        <div className="navbar__profile--icon"></div>
                        <div className="navbar__profile--username">Jan Kowalski</div>
                    </div>
                    : <><button className="navbar__button">Sign In</button>
                        <button className="navbar__button navbar__button--register">Register now</button></>
                }
            </div>
        </nav>
    )
}

export default Navbar
