import React from 'react'
import './SummaryCard.css'
import {ReactComponent as Arrow} from '../images/arrow.svg';
import {ReactComponent as Line} from '../images/line.svg';

function SummaryCard(props) {
    let cardClass = '';

    props.value!==undefined ? cardClass = 'card__info' : cardClass = 'card__info card__info--inactive';

    return (
        <div className="card">
            <div className="card__container">
            {props.value ? <Arrow className="card__arrow" /> : <Line className="card__line" />}
                <div className={cardClass}>
                    <div className="card__info--name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="card__info--value">
                        {props.value ?<h1>{props.value}{props.unit? props.unit : ''}</h1>: <h1>No data</h1>}
                    </div>
                </div>
            </div>
            <h5 className="card__range--text">Normal range {props.range}</h5>
        </div>
    )
}

export default SummaryCard
