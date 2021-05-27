import React from 'react';
import './Recommendations.css';
import StatsCard from '../components/StatsCard';
import {ReactComponent as IconHome} from '../images/icons/home.svg';
import {ReactComponent as IconSep} from '../images/icons/bed.svg';


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
                    <IconSep className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Separate yourself from other people
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconSep className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Monitor your symptoms
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconSep className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Clean your hands often
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconSep className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Avoid sharing household items
                    </h1>
                </div>
                <div className="recommendations__item">
                    <IconSep className="recommendations__icon" />
                    <h1 className="recommendations__desc">
                        Clean all “high-touch” surfaces everyday
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Recommendations
