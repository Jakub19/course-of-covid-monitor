import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProfileOverview from '../components/ProfileOverview'
import ProfileNavbar from '../components/ProfileNavbar'
import ProfileSettings from '../components/ProfileSettings'
import UserService from "../services/userService";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
    
import "./UserPage.css"


function UserPage(props) {
    const { path } = useRouteMatch();
    const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

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

