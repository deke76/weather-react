import React from 'react';
import { useApplicationData, WeekWeather } from '../constants';
import './App.css';

function App() {
  const { state } = useApplicationData();

  return (
    <main className="App">
      <WeekWeather forecast={state.forecast}/>
    </main>
  );
}

export default App;
