import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div>
            <Link to="/low" className="button">I - V [HARD]</Link>
        </div>
        <div>
         <Link to="/high" className="button">VI - X</Link>
        </div>
    </div>
  );
}

export default Home;
