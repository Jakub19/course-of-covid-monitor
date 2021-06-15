import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'
import SetupForm from '../components/SetupForm'
import authHeader from '../services/authHeader'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import "./UserPage.css"
import axios from 'axios'

//Check if it's first user login, if yes show form and lock scrolling
function isFirstLogin(isFirstLogin) {
    if (isFirstLogin) {
        document.body.style.overflow = ''
        
    } else {
        document.body.style.overflow = 'hidden'
        return <SetupForm />
    }
}

function UserPage(props) {
    const { path } = useRouteMatch();
    const API_URL = "http://localhost:8080";
    const [userHealthInf, setUserHealthInf] = useState();

    //Fetch user health information
    const getHealthInformation = () => {
        axios.get(API_URL + "/api/HealthInformationOverviews/GetCurrentUserHio", { headers: authHeader() })
            .then((response) => {
                setUserHealthInf(response.data[0])
            }).catch((err) => {

            })
    };

    useEffect(() => {
        getHealthInformation();
    }, [])


    return (
        <div className='userpage'>
            <ProfileNavbar history={props.history} />
            <Switch>
                <Route exact path={path}>
                    <ProfileOverview userHealthInf={userHealthInf} />
                    <Footer />
                    {isFirstLogin(userHealthInf)}
                </Route>
                <Route path={`${path}/settings`}>
                    <ProfileSettings userHealthInf={userHealthInf}/>
                    <Footer />
                </Route>
            </Switch>
        </div>
    )
}

export default UserPage

