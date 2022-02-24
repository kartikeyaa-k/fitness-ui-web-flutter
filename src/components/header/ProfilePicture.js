import React from 'react'
import ME from '../../assets/max-profile.jpg'

const ProfilePicture = () => {
  // For demo purpose profile picture directly loaded from assets
  return (
    <div className='me__container'>
          <div className='profile__me'>
            <div className='profile__me-image'>
              <img src={ME} alt='ME' />
            </div>
          </div>
        </div>
  )
}

export default ProfilePicture