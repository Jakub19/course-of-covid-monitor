import React from 'react';
import './Recommendations.css';
import StatsCard from '../components/StatsCard';
import {ReactComponent as IconHome} from '../images/icons/home.svg';
import {ReactComponent as IconBed} from '../images/icons/bed.svg';
import {ReactComponent as IconHThermometer} from '../images/icons/thermometer.svg';
import {ReactComponent as IconHands} from '../images/icons/hands.svg';
import {ReactComponent as IconSign} from '../images/icons/sign.svg';
import {ReactComponent as IconSprinkler} from '../images/icons/sprinkler.svg';


function Recommendations() {
    return (
        <div className="recommendations">
            <StatsCard />
            <div className="recommendations__container">
                <div className="recommendations__circle"></div>
                <div className="recommendations__item">
                    <IconHome className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Stay home except to get medical care
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconBed className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Separate yourself from other people
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconHThermometer className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Monitor your symptoms
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconHands className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Clean your hands often
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconSign className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Avoid sharing household items
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconSprinkler className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Clean all “high-touch” surfaces everyday
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Recommendations
