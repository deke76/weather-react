import React from "react";
import { DayWeather, iconWeather, weekDay } from "../constants";

export default function WeekWeather(props) {
  const forecast = props.forecast;
  console.log(forecast);
  const daysWeather = 
      forecast.map((elem, i) => {
        let day = new Date(forecast[i].dt * 1000);
        let today = new Date(Date.now())
        return <DayWeather
          key={forecast[i].dt} 
          day={weekDay[day.getDay()]}
          low={Math.round(forecast[i].temp.min)}
          high={Math.round(forecast[i].temp.max)}
          icon={iconWeather(forecast[i].weather[0].id)}
          description={forecast[i].weather[0].description}
          current={day.getDay()===today.getDay()}          
        />
      });

  console.log(daysWeather);

  return (
    <div className='card-group'>
      { daysWeather }
    </div>
  )
};