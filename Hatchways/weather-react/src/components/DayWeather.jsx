import React from "react";
import classNames from "classnames";
import './DayWeather.scss';

export default function DayWeather(props) {
  const { day, low, high, icon, description, current } = props;

  const dayClass = 
  classNames('card', current ? 'bg-light' : '');
  
  return (
    <div className={dayClass}>
      <div className='card-title'>{day}</div>
      <div className='card-body'><img src={icon} alt={description} /></div>
      <div className='footer'>
        <div className='fw-bold'>{low} &#176;</div>
        <div>{high} &#176;</div>
      </div>
    </div>
  )
};