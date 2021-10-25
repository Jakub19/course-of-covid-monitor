import React, { useEffect, useState } from 'react'
import logo from '../images/logos/logo.png'
import useAuth from '../services/useAuth';
import './ProfileNavbar.css'
import {
    Link,
    useRouteMatch
} from "react-router-dom";

function ProfileNavbar(props){
    const { logoutUser } = useAuth();
    const { url } = useRouteMatch();
    const [activeTab, setActiveTab] = useState();

    function SetActiveTab() {
        const location = window.location.pathname
        const tabIndicator = document.querySelector('.tab__indicator');
        if(location === url){
            setActiveTab(0);
            tabIndicator.style.left = `calc(calc(100% / 2) * ${0})`;
        }else if(location === url + '/settings/account' || location === url + '/settings/password' || location === url + '/settings/notifications'){
            setActiveTab(1)
            tabIndicator.style.left = `calc(calc(100% / 2) * ${1})`;
        }
      }

    useEffect(() => {
        SetActiveTab()
      });

    return (
        <nav className="profileNavbar">
            <Link to={'/'}><img className="profileNavbar__logo" src={logo} alt="logo" /></Link>
            <ul className="tab">
                <span className="tab__indicator"></span>
                <Link className="tab__link tab__link--left" to={`${url}`}>
                    <li className={`tab__button ${activeTab===0?"tab__button--active":' ' }`} id="btn1">Twój profil</li>
                </Link>
                <Link className="tab__link tab__link--right" to={`${url}/settings/account`}>
                    <li className={`tab__button ${activeTab===1?"tab__button--active":' ' }`}>Ustawienia</li>
                </Link>
            </ul>
            <div className="profileNavbar__profile--container">
                <button className="profileNavbar__logout" onClick={()=> logoutUser()}>Wyloguj</button>
            </div>
        </nav>
    )
}

export default ProfileNavbar
