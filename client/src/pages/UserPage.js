import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'
import SetupForm from '../components/SetupForm'
import authHeader from '../services/authHeader'
import DailyForm from '../components/DailyForm'
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
    const [handleShowForm, setHandleShowForm] = useState(false)

    //set default value to true to show everyday form
    const [handleShowDailyForm, setHandleShowDailyForm] = useState(false)


    //Fetch user health information
    const getHealthInformation = async () => {
        await axios.get(API_URL + "/api/HealthInformationOverviews/GetCurrentUserHio", { headers: authHeader() })
            .then((response) => {
                setUserHealthInf(response.data[0])
                showInitialForm(response.data[0])
            }).catch((err) => {

            })
    };

    //Check if it's first user login, if yes show form and lock scrolling
    const showInitialForm = (response) => {
        if (response) {
            return
        } else {
            document.body.style.overflow = 'hidden'
            setHandleShowDailyForm(true)
        }
    }

    const showDailyForm = (showForm) => {
        if (showForm) {
            document.body.style.overflow = 'hidden'
            return <DailyForm setShowForm={setHandleShowForm}/>    
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
                    <ProfileOverview userHealthInf={userHealthInf} setHandleShowForm={setHandleShowForm}/>
                    <Footer />
                    {handleShowDailyForm ? <SetupForm setShowForm={setHandleShowForm}/> : ''}
                    {showDailyForm(handleShowForm)}
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

