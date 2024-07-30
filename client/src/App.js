import React, { useEffect } from 'react';
import './App.css';
import Home from './components/home.js';
import GameSelect from './components/gameSelect.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    function scheduleMidnightRefresh() {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      const timeToMidnight = nextMidnight - now;
      
      setTimeout(() => {
        window.location.reload();
      }, timeToMidnight);
    }

    scheduleMidnightRefresh();
  })
  return (
    <Router>
      <div className="min-h-screen p-4 App">
        <div className="app-background"></div>
        <Link to="/">
          <h1 className='text-5xl text-white mb-5 font-medium'>TANKDLE</h1>
        </Link>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/low' Component={() => <GameSelect gameMode="low"/>}/>
          <Route exact path='/high' Component={() => <GameSelect gameMode="high"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
