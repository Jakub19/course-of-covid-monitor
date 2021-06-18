import React, { useContext, useEffect } from 'react'
import logo from '../images/logos/logo.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Login from './Login';
import avatar from '../images/defaultAvatar.jpg'
import { UserContext } from '../services/UserContext'
import profileDetails from '../services/profileDetails'

function Navbar(props) {
    const { user } = useContext(UserContext);
    const {data, setData, getProfileDetails} = profileDetails()

    useEffect(() => {
        setData(getProfileDetails());
    },[])

    return (
        <nav className="navbar">
            <Link to={'/'}><img className="navbar__logo" src={logo} alt="logo" /></Link>
            <div className="navbar__buttons">
                {user
                    ?
                    <Link className="navbar__link" to={'/profile'}>
                        <div className="navbar__container">
                            <div className="navbar__avatar"><img className="navbar__img" src={avatar} alt="User avatar" /></div>
                            <div className="navbar__username">{data.name + ' ' + data.surname}</div>
                        </div>
                    </Link>
                    :
                    <>
                        <Login history={props.history} />
                        <Link to={'/register'}><button className="navbar__button navbar__button--register">Register</button></Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
