import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';
import Search from './search.js';
import { compareTanks } from '../utils/comparisons.js';
import { Grid } from './grid.js';

function Game() {
    const [tanks, setTanks] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [guessResults, setGuessResults] = useState([]);
    const [isSolved, setIsSolved] = useState(false);

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

    function onTankSelect(tank) {
        if (tank.tank_id === solutionTank.tank_id) {
            setIsSolved(true);
        }

        const compResult = compareTanks(tank, solutionTank);
        setGuesses([...guesses, tank]);
        setGuessResults([...guessResults, compResult]);

        console.log(compResult);
    };


    if (!solutionTank) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Search tanks={tanks} guesses={guesses} onTankSelect={onTankSelect}/>
            <h1 className='text-blue-600'>{solutionTank.name}</h1>
            <Grid guessResults={guessResults}/>
        </div>
    );
}

export default Game;