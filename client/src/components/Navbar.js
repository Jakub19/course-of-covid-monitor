import React from 'react'
import logo from '../images/logos/logo.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Login from './Login';

function Navbar(props) {
    const isLoggedIn = props.isLoggedIn;

    return (



        <nav className="navbar">
            <Link to={'/'}><img className="navbar__logo" src={logo} alt="logo" /></Link>
            <div className="navbar__buttons">
                {isLoggedIn
                    ?
                    <div className="navbar__profile--container">
                        <div className="navbar__profile--icon"></div>
                        <div className="navbar__profile--username">Jan Kowalski</div>
                    </div>
                    :
                    <>
                        <Login/>



                        <Link to={'/profile'}><button className="navbar__button">Sign In</button></Link>
                        <Link to={'/register'}><button className="navbar__button navbar__button--register">Register now</button></Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
