import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Background from '../components/Background'

function Homepage() {
    return (
        <div className="homepage">
            <Background />
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default Homepage
