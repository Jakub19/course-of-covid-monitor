import React, { useState, useEffect } from 'react'
import './StatsCard.css'

function StatsCard() {

    const [todayCases, setTodayCases] = useState(0);
    const [todayDeaths, setTodayDeaths] = useState(0);
    const [cases, setCases] = useState(0);
    const [deaths, setDeaths] = useState(0);


    //Set country to view its stats
    const country = 'Poland';


    useEffect(() => {
        fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`)
            .then(res => res.json())
            .then(json => { setTodayCases(json.todayCases); setTodayDeaths(json.todayDeaths); setCases(json.cases); setDeaths(json.deaths) });
    })

    return (
        <div className="statsCard">
            <div className="statsCard__headline">
                Today's COVID19 statistics for {country}
            </div>

            <div className="statsCard__container">
                <div className="statsCard__item">
                    <h1 className="statsCard__title">Cases: </h1>
                    <div className="statsCard__values">
                        <div className="statsCard__today">{todayCases}</div>
                        <div className="statsCard__total">/{cases}</div>
                    </div>
                </div>
                <div className="statsCard__item">
                    <h1 className="statsCard__title">Deaths: </h1>
                    <div className="statsCard__values">
                        <div className="statsCard__today">{todayDeaths}</div>
                        <div className="statsCard__total">/{deaths}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCard
