import React from "react";
import './DayWeather.scss';

export default function DayWeather(props) {
  const { low, high } = props;
  console.log(low);
  return (
    <div className='card'>
      <div className='card-title'>Day</div>
      <div className='card-body'>Icon</div>
      <div className='footer'>
        <div>{low} &#176;</div>
        <div>{high} &#176;</div>
      </div>
    </div>
  )
};