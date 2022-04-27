import React from 'react';
import { useApplicationData, WeekWeather } from '../constants';
import './App.css';

function App() {
  const { state } = useApplicationData();

  return (
    <main className="App">
      <WeekWeather state={state}/>
    </main>
  );
}

export default App;
