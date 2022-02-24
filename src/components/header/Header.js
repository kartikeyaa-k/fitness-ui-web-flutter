import React from 'react'
import './header.css';
import ProfilePicture from './ProfilePicture';
import Achievments from './Achievments';

const Header = () => {
return (
    <header>
      <div className="container header__container">
        {/* Hardcoding */}
        <h3>Hello</h3>
        <h1>Max</h1> <br/>
        {/* Profile Picture Component */}
        <ProfilePicture/><br />
        {/* Achievments Card Component*/}
        <Achievments /><br />
      </div>
    </header>
  )
}

export default Header