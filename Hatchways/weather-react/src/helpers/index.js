export function getLocation() {
  return 'Calgay';
};

export function apiOptions(config) {
  return {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {q: config.city, lat: '0', lon: '0', lang: config.language, units: config.units},
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST,
      'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY
    }
  }
};

export function iconWeather(id) {
  let url = "http://openweathermap.org/img/wn/"
  const strID = 
    id < 300
      ? '11d'
      : id < 400
      ? '09d'
      : id < 600
      ? '10d'
      : id < 700
      ? '13d'
      : id < 800
      ? '50d'
      : id === 800
      ? '01d'
      : id === 801
      ? '02d'
      : id === 802
      ? '03d'
      : '04d'
  url += strID + '@2x.png'
  return url
};