import React, { useEffect } from 'react';
import './App.css';
import Home from './components/pages/home.js';
import GameSelect from './components/game/gameSelect.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/shared/footer.js';
import Privacy from './components/pages/privacy.js';

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
          <h1 className='text-7xl text-wyellow font-medium transform hover:scale-105 transition-transform mb-2'>TANKDLE</h1>
        </Link>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/low' Component={() => <GameSelect gameMode="low" />} />
          <Route exact path='/high' Component={() => <GameSelect gameMode="high" />} />
          <Route exact path='/privacy' Component={Privacy} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
