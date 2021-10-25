import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'


function Homepage(props) {

    return (
        <div className="homepage">
            <Navbar history={props.history}/>
            <Hero />
            <Footer />
        </div>
    )
}

export default Homepage
