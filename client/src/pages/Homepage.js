import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Feature from '../components/Feature'

function Homepage() {
    return (
        <div className="homepage">
            <Navbar />
            <Hero />
            <Feature />
            <Footer />
        </div>
    )
}

export default Homepage
