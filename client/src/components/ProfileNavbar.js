import React from 'react'
import logo from '../images/logos/logo.svg'
import './ProfileNavbar.css'
import AuthService from "../services/authService";
import {
    Link,
    useHistory,
    useRouteMatch
} from "react-router-dom";


function ProfileNavbar(props){
    const history = useHistory();
    const { url } = useRouteMatch();
    const handleLogout = () => {
        AuthService.logout();
        history.push("/");
    }
    return (
        <nav className="profileNavbar">
            <Link to={'/'}><img className="profileNavbar__logo" src={logo} alt="logo" /></Link>
            <ul className="tab">
                <span className="tab__indicator"></span>
                <Link className="tab__link" to={`${url}`}>
                    <li className="tab__button tab__button--active" id="btn1">Overview</li>
                </Link>
                <Link className="tab__link" to={`${url}/settings/account`}>
                    <li className="tab__button">Settings</li>
                </Link>
            </ul>
            <div className="profileNavbar__profile--container">
                <button className="profileNavbar__logout" onClick={() => handleLogout()}>Logout</button>
            </div>
        </nav>
    )
}

export default ProfileNavbar
