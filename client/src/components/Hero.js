import React, { Component } from 'react'
import './Hero.css'

export class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <h2 className="hero__title">Lorem ipsum</h2>
                <p className="hero__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum pellentesque pulvinar eros eu aliquet. Aenean commodo ac libero at efficitur. 
                Quisque quis turpis lacus. Nam viverra magna in ullamcorper efficitur. 
                Aenean commodo ac libero at efficitur. Quisque quis turpis lacus. 
                Aenean commodo ac libero at efficitur. 
                Quisque quis turpis lacus.  </p>
            </div>
        )
    }
}

export default Hero
