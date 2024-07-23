import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';
import Search from './search.js';
import { compareTanks } from '../utils/comparisons.js';
import { Grid } from './grid.js';

function Game() {
    const [tanks, setTanks] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
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

        const storedGuesses = JSON.parse(localStorage.getItem('guessResults'));  
        if (storedGuesses && guessResults.length === 0) {     
            console.log("guesses:", storedGuesses);
            setGuessResults(storedGuesses);
        }
    }, []); 

    useEffect(() => {
        if (isSolved) {
            localStorage.removeItem('guessResults');
        }
    }, [isSolved]);

    function onTankSelect(tank) {
        if (tank.tank_id === solutionTank.tank_id) {
            setIsSolved(true);
            console.log("Solved!");
        }

        const compResult = compareTanks(tank, solutionTank);
        const newGuessResults = [...guessResults, compResult];
        setGuessResults(newGuessResults);
        localStorage.setItem('guessResults', JSON.stringify(newGuessResults));
    };


    if (!solutionTank) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Search isSolved={isSolved} tanks={tanks} guesses={ guessResults } onTankSelect={onTankSelect}/>
            <h1 className='text-blue-600'>{solutionTank.name}</h1>
            <Grid guessResults={guessResults}/>
        </div>
    );
}

export default Game;