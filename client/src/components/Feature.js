import React from 'react'
import logo from '../images/logos/logo_small_icon_only.png'
import './Feature.css';

function Feature() {
    return (
        <div className="feature">
            <h1 className="feature__title">Sign up today!</h1>
            <div className="feature__main"><div className="feature__logo">
                <img src={logo} alt="" />
            </div>
                <div className="feature__paragraphs">
                    <p className="feature__p">Follow your COVID history</p><hr />
                    <p className="feature__p">Fill everyday health forms and get feedback </p><hr />
                    <p className="feature__p">Get personalized health advises</p><hr />
                    <p className="feature__p">Get medical assist </p>
                </div>
            </div>
        </div>
    )
}

export default Feature
