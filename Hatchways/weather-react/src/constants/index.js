import useApplicationData from "../hooks/useApplicationData";
import WeekWeather from '../components/WeekWeather';
import DayWeather from '../components/DayWeather';
import { getLocation, apiOptions, iconWeather } from "../helpers";

const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export {
  apiOptions,
  DayWeather,
  getLocation,
  iconWeather,
  useApplicationData,
  weekDay,
  WeekWeather
};