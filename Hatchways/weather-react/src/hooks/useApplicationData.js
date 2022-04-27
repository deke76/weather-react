import { useEffect, useState } from 'react';
import { apiOptions } from '../constants'
import axios from 'axios';

export default function useApplicationData() {
  const[state, setState] = useState({
    day: 'Monday',
    forecast: [],
    config: {
      city: 'Calgary',
      language: 'English',
      units: 'metric'
    }
  })
  
  useEffect(() => {  
   axios.request(apiOptions(state.config))
   .then(response => {
     console.log(response);
     setState(prev => ({ ...prev, forecast: response.data.list}));
   })
   .catch(error => {
     console.error(error);
   });
  }, [state.config]);

  return { state };
}