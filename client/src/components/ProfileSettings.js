import React, { useEffect, useState } from 'react'
import profileDetails from '../services/profileDetails'
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


function ProfileSettings(props) {
    const { path, url } = useRouteMatch()
    const [activeTab, setActiveTab] = useState();
    const {data, setData, getProfileDetails} = profileDetails()


    function SetActiveTab() {
        const location = window.location.pathname
        if (location === url + '/account') {
            setActiveTab(0)
        } else if (location === url + '/password') {
            setActiveTab(1)
        } else if (location === url + '/notifications') {
            setActiveTab(2)
        }
    }

    useEffect(() => {
        setData(getProfileDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        SetActiveTab();
    })

    return (
        <div className="profileSettings">
            <div className='profileSettings__card'>
                <div className="profileSettings__nav">
                    <Avatar />
                    <h1 className="profileSettings__username">{data.name + ' ' + data.surname}</h1>
                    <ul className="profileSettings__list">
                        <Link className="profileSettings__link" to={`${url}/account`}>
                            <li className={`profileSettings__button ${activeTab === 0 ? "profileSettings__button--active" : ' '}`} >Account</li>
                        </Link>
                        <Link className="profileSettings__link" to={`${url}/password`}>
                            <li className={`profileSettings__button ${activeTab === 1 ? "profileSettings__button--active" : ' '}`} >Password</li>
                        </Link>
                        <Link className="profileSettings__link" to={`${url}/notifications`}>
                            <li className={`profileSettings__button ${activeTab === 2 ? "profileSettings__button--active" : ' '}`} >Notifications</li>
                        </Link>
                    </ul>
                </div>
                <div className="profileSettings__content">
                    <Switch>
                        <Route exact path={`${path}/account`}>
                            <SettingsAccount data={data}/>
                        </Route>
                        <Route path={`${path}/password`}>
                            <SettingsPassword />
                        </Route>
                        <Route path={`${path}/notifications`}>
                            <SettingsNotifications userHealthInf={props.userHealthInf} getHealthInformation={props.getHealthInformation}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
