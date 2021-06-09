import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import "./UserPage.css"
import axios from 'axios'
import authHeader from '../services/authHeader'


function UserPage(props) {
    const { path } = useRouteMatch();
    const API_URL = "http://localhost:8080";

    const [positiveSince, setPositiveSince] = useState('')

    
    const getUserDetails = () => {
        axios.get(API_URL + "/api/HealthInformationOverviews", { headers: authHeader() })
        .then((response) => {
            setPositiveSince(response.data);
        })
    };

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div className='userpage'>
            <ProfileNavbar history={props.history} />
            <Switch>
                <Route exact path={path}>
                    <ProfileOverview positiveSince = {positiveSince}/>
                </Route>
                <Route path={`${path}/settings`}>
                    <ProfileSettings />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default UserPage

