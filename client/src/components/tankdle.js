import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';
import Search from './search.js';

function Game() {
    const [tanks, setTanks] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        async function fetchTankData() {
            try {
                const tankData = await getTankList();
                setTanks(tankData);
            } catch (error) {
                console.error('Error fetching tank list:', error);
            }
        };
        
        async function fetchSolutiontank() {
            try {
                const solTank = await getSolutionTank();
                setSolutionTank(solTank);
            } catch (error) {
                console.error('Error fetching solution tank:', error);
            }
        };

        fetchSolutiontank();
        fetchTankData();
    }, []); 

    if (!solutionTank) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Search tanks={tanks}/>
            <h1>{solutionTank.name}</h1>
        </div>
    );
}

export default Game;