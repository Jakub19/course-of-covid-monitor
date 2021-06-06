import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer'

function Homepage(props) {
    return (
        <div className="homepage">
            <Navbar history={props.history}/>
            <RegisterForm />
            <Footer />
        </div>
    )
}

export default Homepage
