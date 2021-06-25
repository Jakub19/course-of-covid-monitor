import React from 'react'
import { Chart } from 'react-charts'
import './HistoryCard.css'

function HistoryCard(props) {
    const data = React.useMemo(
        () => [
            {
                label: props.name,
                data: props.data
            }
        ],
        [props.name, props.data]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <div className="historyCard" >
            <h1 className="historyCard__name">{props.name}</h1>
            <div className="chartContainer" style={{ height: '300px' }}>
            {console.log(props.data)}
                <Chart data={data} axes={axes} tooltip/>
            </div>
        </div>
    )
}

export default HistoryCard