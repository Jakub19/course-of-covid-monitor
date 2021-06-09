import React from 'react'
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


function UserPage(props) {
    const { path } = useRouteMatch();

    return (
        <div className='userpage'>
            <ProfileNavbar history={props.history}/>
            <Switch>
                <Route exact path={path}>
                <ProfileOverview />
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

