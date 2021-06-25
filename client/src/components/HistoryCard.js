import React from 'react'
import { Chart } from 'react-charts'
import './HistoryCard.css'

function HistoryCard(props) {
    const data = React.useMemo(
        () => [
            {
                label: props.name,
                data: props.data,
                color: "#34498C"
            }
        ],
        [props.name, props.data]
    )

    const series = React.useMemo(
        () => ({
          showPoints: false
        }),
        []
      )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom'},
            { type: 'linear', position: 'left' }
        ],
        []
    )

    const renderChart = () => {
        return <Chart data={data} series={series} axes={axes} tooltip/>
    }

    return (
        <div className="historyCard" >
            <h1 className="historyCard__name">{props.name}</h1>
            <div className="chartContainer">
                {props.data ? renderChart(): ''}
            </div>
        </div>
    )
}

export default HistoryCard