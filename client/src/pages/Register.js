import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer'

function Register(props) {
    return (
        <div className="homepage">
            <Navbar history={props.history} />
            <RegisterForm history={props.history} />
            <Footer />
        </div>
    )
}

export default Register
