import React from "react";
import { DayWeather } from "../constants";

export default function WeekWeather(props) {
  const { forecast } = props.state;
  // console.log(forecast[0]);
  const options = {
    low: forecast[0].temp.min,
    high: forecast[0].temp.max
  }
  // const daysWeather = 
  return (
    <div>
      <DayWeather {...options}/>
    </div>
  )
};