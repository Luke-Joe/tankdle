import React, { useEffect } from 'react';
import './App.css';
import GameSelect from './components/gameSelect.js';

function App() {
  useEffect(() => {
    function scheduleMidnightRefresh() {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      const timeToMidnight = nextMidnight - now;

      // const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 1);
      // const timeToMinute = nextMinute - now;

      setTimeout(() => {
        localStorage.removeItem('resultsHigh');
        localStorage.removeItem('resultsLow');
        window.location.reload();
      }, timeToMidnight);
    }

    scheduleMidnightRefresh();
  })
  return (
    <div className="min-h-screen p-4 App">
      <div className="app-background"></div>
      <h1 className='text-5xl text-white mb-5'>TANKDLE</h1>
      <GameSelect />
    </div>
  );
}

export default App;
