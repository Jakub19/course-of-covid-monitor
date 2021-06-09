import React, { useContext } from 'react'
import logo from '../images/logos/logo.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Login from './Login';
import { UserContext } from '../services/UserContext';

function Navbar(props) {
    const { user } = useContext(UserContext);
    return (
        <nav className="navbar">
            <Link to={'/'}><img className="navbar__logo" src={logo} alt="logo" /></Link>
            <div className="navbar__buttons">
                {user
                    ?
                    <Link className="navbar__link" to={'/profile'}><div className="navbar__profile--container">
                        <div className="navbar__profile--icon"></div>
                        <div className="navbar__profile--username">{user.name + ' ' + user.surname}</div>
                    </div></Link>
                    :
                    <>
                        <Link to={'/profile'}><button className="navbar__button">To profile</button></Link>
                        <Login history={props.history}/>
                        <Link to={'/register'}><button className="navbar__button navbar__button--register">Register</button></Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
