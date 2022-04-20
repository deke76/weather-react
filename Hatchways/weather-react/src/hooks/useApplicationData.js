import axios from 'axios';
import { useEffect, useState } from 'react';
import { getLocation, openWeatherURL } from '../constants'

export default function useApplicationData() {
  const[weather, setWeather] = useState({});

  useEffect() => {
    axios
      .get(openWeatherURL)
      .then(response => console.log(response);)
  };

  return { weather };
}