import React from 'react';
import { useApplicationData } from '../constants';
import './App.css';

function App() {
  const { weather } = useApplicationData;

  return (
    <main className="App">
      {weather}
    </main>
  );
}

export default App;
