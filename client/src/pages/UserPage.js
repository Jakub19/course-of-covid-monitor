import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'
import authHeader from '../services/authHeader'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import "./UserPage.css"
import axios from 'axios'
import { UserContext } from '../services/UserContext'



function UserPage(props) {
    const { path } = useRouteMatch()
    const { API_URL} = useContext(UserContext);
    const [userHealthInf, setUserHealthInf] = useState()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='userpage'>
            <ProfileNavbar history={props.history} />
            <Switch>
                <Route exact path={path}>
                    <ProfileOverview userHealthInf={userHealthInf}/>
                    <Footer />
                </Route>
                <Route path={`${path}/settings`}>
                    <ProfileSettings userHealthInf={userHealthInf} getHealthInformation={getHealthInformation}/>
                    <Footer />
                </Route>
            </Switch>
        </div>
    )
}

export default UserPage

