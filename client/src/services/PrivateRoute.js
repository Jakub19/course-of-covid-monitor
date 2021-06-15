import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';
export default function PrivateRoute(props) {
    const { user, isLoading } = useContext(UserContext);
    const { component: Component, ...rest } = props;
    if (isLoading) {
        return null;
    }
    if (user) {
        return (<Route {...rest} render={(props) =>
            (<Component {...props} />)
        }
        />
        )
    }

    //redirect if there is no user 
    return <Redirect to='/' />
}