import React from 'react'
import { Chart } from 'react-charts'
import './HistoryCard.css'

function HistoryCardArea(props) {
    const data = React.useMemo(
        () => [
            {
                label: props.valueName2,
                data: props.data ? props.data.map((data) => data[1]) : [],
                color: "rgba(1,1,1,0)"
            },
            {
                label: props.valueName1,
                data: props.data ? props.data.map((data) => data[0]) : [],
                color: "#34498C"
            }
        ],
        [props.valueName1, props.valueName2, props.data]
    )

    const series = React.useMemo(
        () => ({
          showPoints: false,
          type: 'area'
        }),
        []
      )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom'},
            { type: 'linear', position: 'left', stacked: true }
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

export default HistoryCardArea