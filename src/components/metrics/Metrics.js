import React from 'react'
import Metric from '../metric/Metric';

const Metrics = ({ metrics, onSelected, activeMetricID }) => {

    return (
        <>
            {metrics.map((metric) => (
                <Metric key={metric.id} metric={metric} onSelected={onSelected} activeMetricID={activeMetricID} />))}
        </>
    )
}

export default Metrics