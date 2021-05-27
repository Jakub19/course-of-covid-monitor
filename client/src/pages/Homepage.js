import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import Recommendations from '../components/Recommendations'

function Homepage() {
    return (
        <div className="homepage">
            <Navbar />
            <Hero />
            <Recommendations />
            <Feature />
            <Footer />
        </div>
    )
}

export default Homepage
