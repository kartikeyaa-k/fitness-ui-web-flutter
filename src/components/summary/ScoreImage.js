import React from 'react'
import Strength from '../../assets/strength-score-v4.jpeg';
const ScoreImage = () => {
  return (
    // Hardcoded data
    <div className='me__container'>
          <div className='profile__me'>
            <div className='profile__me-image'>
              <img src={Strength} alt='strength' />
            </div>
          </div>
        </div>
  )
}

export default ScoreImage