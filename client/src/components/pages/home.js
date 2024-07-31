import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../shared/navButton.js';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className='text-2xl text-white mb-2 opacity-75'>TEST YOUR WORLD OF TANKS KNOWLEDGE</h2>
      <NavButton to="/high" text1="CLASSIC" text2="Tier VI - X Vehicles" imgSrc="/IS7.png" highlightColour="wgreen" />
      <NavButton to="/low" text1="HARD MODE" text2="Tier I - V Vehicles" imgSrc="/T-34.png" highlightColour="wgreen" />
    </div>
  );
}

export default Home;
