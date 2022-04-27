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