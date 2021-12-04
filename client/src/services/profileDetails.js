import { useContext, useState } from 'react';
import axios from 'axios';
import authHeader from './authHeader';
import { UserContext } from './UserContext';
export default function useAuth() {
    const [error, setError] = useState(null);
    const { API_URL, user } = useContext(UserContext);;
    const [data, setData] = useState('');

    //register user
    function getProfileDetails() {
        if (user) {
            axios.get(API_URL + "/api/Authenticate/Profile/ProfileDetails", {
                headers: authHeader()
            }).then((response) => {
                setData(response.data)
            }).catch((error) => {
                setError(error)
            })
            return data
        } else {
            return
        }
    };

    return {
        getProfileDetails,
        setData,
        data,
        error
    }
}