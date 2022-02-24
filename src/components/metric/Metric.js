import React from 'react'

const Metric = ({metric, onSelected, activeMetricID }) => {
    return (
        <>
        <article id= {metric.id} className= {`metrics__bubble ${activeMetricID === metric.id? "active" : ''}`} key = {metric.id} onClick={() => onSelected(metric)}>
            <div className='label'  >{metric.label}</div>
            <div className='weight'  >{metric.weight}</div>
            <div className='unit'> {metric.unit}</div>
        </article>
        </>
    )
}

export default Metric