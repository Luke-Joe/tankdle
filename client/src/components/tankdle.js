import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';
import Search from './search.js';
import { compareTanks } from '../utils/comparisons.js';
import { Grid } from './grid.js';
import { EndDisplay } from './endDisplay.js';

function Game() {
    const [tanks, setTanks] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const [dayId, setDayId] = useState(null);
    const [guessResults, setGuessResults] = useState([]);
    const [isSolved, setIsSolved] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const tankData = await getTankList();
                setTanks(tankData);

                const solTank = await getSolutionTank();
                setSolutionTank(solTank.solutionTank);
                setDayId(solTank.dayId);

                const storedGuesses = JSON.parse(localStorage.getItem('guessResults'));
                if (storedGuesses && guessResults.length === 0) {     
                    console.log("guesses:", storedGuesses);
                    setGuessResults(storedGuesses);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    useEffect(() => {
        checkIfSolutionFound();
    }, [guessResults]);

    function checkIfSolutionFound() {
        if (guessResults.length > 0 
        && guessResults[guessResults.length - 1].tank_id === solutionTank.tank_id) {
            setIsSolved(true);
            // TODO: Add dayID to list of completions + # attempts
        }
    }

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
    // <h1 className='text-blue-600'>{solutionTank.name}</h1>
    return (
        <div>
            <Search isSolved={isSolved} tanks={tanks} guessResults={guessResults} onTankSelect={onTankSelect}/>
            <h1 className='text-blue-600'>{solutionTank.name}</h1>
            <Grid guessResults={guessResults}/>
            <EndDisplay dayId={dayId} isSolved={isSolved} guessResults={guessResults} solutionTank={solutionTank}/>
        </div>
    );
}

export default Game;