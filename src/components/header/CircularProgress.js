import React from 'react'
import { FiCheck } from "react-icons/fi";
import {BiPlus} from "react-icons/bi";
import {BiChevronUp} from "react-icons/bi"
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import './header.css';


const CircularProgress = ({ object, title, subTitle, iconType }) => {
  return (
    <div className='circular__progress__item'>
      <CircularProgressBar  {...object}>
        <div className='circular__progress__content'>
          <h5> {title} </h5>
          <i>{iconType === 'check' ? <FiCheck /> : iconType === 'plus' ? <BiPlus/> :<BiChevronUp/> } </i>
        </div>
      </CircularProgressBar>
      <span> {subTitle}</span>
    </div>
  )
}

export default CircularProgress