import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'
import SetupForm from '../components/SetupForm'
import authHeader from '../services/authHeader'
import EverydayForm from '../components/EverydayForm'
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

    //set default value to true to show everyday form
    const [showForm] = useState(false)


    //Fetch user health information
    const getHealthInformation = () => {
        axios.get(API_URL + "/api/HealthInformationOverviews/GetCurrentUserHio", { headers: authHeader() })
            .then((response) => {
                setUserHealthInf(response.data[0])
            }).catch((err) => {

            })
    };

    //Check if it's first user login, if yes show form and lock scrolling
    const showInitialForm = (userHealthInf) => {
        if (userHealthInf) {
            document.body.style.overflow = ''
        } else {
            document.body.style.overflow = 'hidden'
            return <SetupForm />
        }
    }

    const showEverydayForm = (showForm) => {
        if (showForm) {
            document.body.style.overflow = 'hidden'
            return <EverydayForm />    
        } else {
            document.body.style.overflow = ''
        }
    }

    useEffect(() => {
        getHealthInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='userpage'>
            <ProfileNavbar history={props.history} />
            <Switch>
                <Route exact path={path}>
                    <ProfileOverview userHealthInf={userHealthInf} />
                    <Footer />
                    {showInitialForm(userHealthInf)}
                    {showEverydayForm(showForm)}
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

