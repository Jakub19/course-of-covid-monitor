import React, { useContext, useEffect } from 'react'
import logo from '../images/logos/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Login from './Login';
import { UserContext } from '../services/UserContext'
import profileDetails from '../services/profileDetails'

function Navbar(props) {
    const { user } = useContext(UserContext);
    const {data, setData, getProfileDetails} = profileDetails()

    useEffect(() => {
        setData(getProfileDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <nav className="navbar">
            
            <div className="navbar__login">
                {user
                    ?
                    <Link className="navbar__link" to={'/profile'}>
                        <div className="navbar__container">
                            <div className="navbar__username">{data.name + ' ' + data.surname}</div>
                        </div>
                    </Link>
                    :
                    <>
                        <Login history={props.history} />
                        <Link to={'/register'}><button className="navbar__button navbar__button--register">Zarejestruj</button></Link>
                    </>
                }
            </div>
            <div className="navbar__logo--coontainer">
                <Link to={'/'}><img className="navbar__logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar__pages">
            <Link to={'/Menu'}><button className="navbar__button navbar__button--page">Menu</button></Link>
            <Link to={'/Promocje'}><button className="navbar__button navbar__button--page">Promocje</button></Link>
            <Link to={'/'}><button className="navbar__button navbar__button--page">placeholder</button></Link>
            <Link to={'/'}><button className="navbar__button navbar__button--page">placeholder</button></Link>
            </div>
        </nav>
    )
}

export default Navbar
