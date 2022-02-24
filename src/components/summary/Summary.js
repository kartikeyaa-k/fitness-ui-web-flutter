import React from 'react'
import Metrics from '../metrics/Metrics';
import ScoreImage from './ScoreImage';
import './summary.css';
import '../header/header.css';



const Summary = () => {
  // Hardcoded Data 
  const metrics = [
    {
      id: 1,
      label: 'Upper Body',
      weight: '225',
      unit: 'lbs'
    },
    {
      id: 2,
      label: 'Core',
      weight: '90',
      unit: 'lbs'
    },
    {
      id: 3,
      label: 'Lower Body',
      weight: '190',
      unit: 'lbs'
    }
  ]
  return (
    <section id='summary'>
      <div className="container header__container">
        {/* Hardcoding */}
        <h3>Activity</h3><br />
        <h2>Strength Score : 628</h2> <br />
        {/* Profile Picture Component */}
        <ScoreImage /><br />
        {/* Achievments Card Component*/}
        <div className='metrics'>
          {metrics.length > 0 ? <Metrics metrics={metrics} /> : 'Something Went Wrong'}
        </div>
      </div>
    </section>
  )
}

export default Summary