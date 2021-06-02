import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer'

function Homepage() {
    return (
        <div className="homepage">
            <Navbar />
            <RegisterForm />
            <Footer />
        </div>
    )
}

export default Homepage
