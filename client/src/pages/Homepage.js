import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import Recommendations from '../components/Recommendations'
import { useEffect } from 'react'
import AuthService from "../services/authService";

function Homepage(props) {
    const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();  
    if (user) {
      setCurrentUser(user);
      console.log("user logged")
    }
  }, []);
    return (
        <div className="homepage">
            <Navbar user={currentUser} history={props.history}/>
            <Hero />
            <Recommendations />
            <Feature />
            <Footer />
        </div>
    )
}

export default Homepage
