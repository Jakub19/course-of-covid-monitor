import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../services/UserContext';
import Avatar from './Avatar'
import SettingsAccount from './SettingsAccount'
import SettingsPassword from './SettingsPassword'
import SettingsNotifications from './SettingsNotifications'
import './ProfileSettings.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import axios from 'axios';
import authHeader from '../services/authHeader';

function ProfileSettings(props) {
    const API_URL = "http://localhost:8080";
    const { path, url } = useRouteMatch();
    const { user } = useContext(UserContext);

    const [data, setData] = useState('');

    const getProfileDetails = () => {
        axios.get(API_URL + "/api/Authenticate/Profile/ProfileDetails", {
            headers: authHeader()
        }).then((response) => {
            setData(response.data)
        }).catch((err) => {
        })
    };

    useEffect(() => {
        getProfileDetails();
    }, [])

    return (
        <div className="profileSettings">
            <div className='profileSettings__card'>
                <div className="profileSettings__nav">
                    <Avatar />
                    <h1 className="profileSettings__username">{user.name + ' ' + user.surname}</h1>
                    <ul className="profileSettings__list">
                        <Link className="profileSettings__link" to={`${url}/account`}>
                            <li className="profileSettings__button profileSettings__button--active">Account</li>
                        </Link>
                        <Link className="profileSettings__link" to={`${url}/password`}>
                            <li className="profileSettings__button ">Password</li>
                        </Link>
                        <Link className="profileSettings__link" to={`${url}/notifications`}>
                            <li className="profileSettings__button" >Notifications</li>
                        </Link>
                    </ul>
                </div>
                <div className="profileSettings__content">
                    <Switch>
                        <Route exact path={`${path}/account`}>
                            <SettingsAccount data={data} />
                        </Route>
                        <Route path={`${path}/password`}>
                            <SettingsPassword />
                        </Route>
                        <Route path={`${path}/notifications`}>
                            <SettingsNotifications userHealthInf={props.userHealthInf}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
