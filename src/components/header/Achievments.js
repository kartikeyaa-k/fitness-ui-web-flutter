import React from 'react'
import CircularProgress from './CircularProgress';


const Achievments = () => {
  // These values will be dynamic
  // Currently mocking it 
  const WorkoutsProgressControls = {
    id: 1,
    percent: 60, // is required
    colorCircle: "lightGrey",
    stroke: 2,
    size:  120,
    speed: 40,
    rotation: -90,
    opacity: 2,
    animationOff: false,
    inverse: false,
    fill: 'none',
    round: false,
    number: false,
    linearGradient: ["rgb(207,42,186)", "rgb(74,234,220)"]
  };

  const TotalVolumeProgressControls = {
    id: 2,
    percent: 90, // is require
    colorCircle: "lightGrey",
    stroke: 2,
    size:  120,
    speed: 40,
    rotation: -90,
    opacity: 2,
    animationOff: false,
    inverse: false,
    fill: 'none',
    round: false,
    number: false,
    linearGradient: ["rgb(2,3,129)", "rgb(74,234,220)"]
  };

  const WeeksProgressControls = {
    id: 3,
    percent: 46, // is require
    colorSlice: "#00a1ff",
    colorCircle: "#c4c4c4",
    stroke: 2,

    size: 120,
    speed: 40,
    rotation: -90,
    opacity: 2,
    animationOff: false,
    strokeDasharray: "0",
    inverse: false,
    fill: 'none',
    round: false,
    number: false,
    linearGradient: ["rgb(255,203,112)", "rgb(74,234,220)"]
  };

  
  return (
    <div className='achievments__container '>
          {/* Hardcoded For Demo Purpose */} 
          <h2 className='achievments_count'>16</h2>
          <h4 className='achievments_label'>total achievments</h4>
          <div className='achievments_circles_container'>
            <CircularProgress object={WorkoutsProgressControls} title={250} subTitle={'166 Workouts'} iconType ={'check'}/>
            <CircularProgress object={TotalVolumeProgressControls} title={'1M'} subTitle={'888,297 lbs'} iconType= {'plus'}/>
            <CircularProgress object={WeeksProgressControls} title={25} subTitle={'12 Weeks'} iconType = {'fire'}/>
          </div>
        </div>
  )
}

export default Achievments