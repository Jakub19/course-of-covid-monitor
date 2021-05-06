import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__copyright--container">
                <h5 className="footer__copyright">© 2021 CovidTracker</h5>
            </div>
            <div className="footer__conditions--container">
                <h5 className="footer__conditions"><a href=" " className="footer__link">Terms & Conditions</a> | <a href=" " className="footer__link">Privacy Policy</a></h5>
            </div>
        </footer>
    )
}

export default Footer
