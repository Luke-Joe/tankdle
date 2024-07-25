import React, { useEffect } from 'react';
import './App.css';
import Game from './components/tankdle.js'

function App() {
  useEffect(() => {
    function scheduleMidnightRefresh() {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      const timeToMidnight = nextMidnight - now;

      // const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 1);
      // const timeToMinute = nextMinute - now;

      setTimeout(() => {
        localStorage.removeItem('guessResults');
        window.location.reload();
      }, timeToMidnight);
    }

    scheduleMidnightRefresh();
  })
  return (
    <div className="min-h-screen bg-gray-100 p-4 App">
      <h1 className='text-5xl'>TANKDLE</h1>
      <Game />
    </div>
  );
}

export default App;
