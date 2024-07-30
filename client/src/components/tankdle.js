import React, { useState, useEffect } from 'react';
import Prompt from './prompt.js';
import Search from './search.js';
import { compareTanks } from '../utils/comparisons.js';
import { Grid } from './grid.js';
import { EndDisplay } from './endDisplay.js';

function Game({ tanks, solutionTank, dayId, lsResults, lsStats }) {
    const [guessResults, setGuessResults] = useState([]);
    const [isSolved, setIsSolved] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const storedGuesses = JSON.parse(localStorage.getItem(lsResults));
                if (storedGuesses && guessResults.length === 0) {     
                    setGuessResults(storedGuesses);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [guessResults]); 

    useEffect(() => {
        checkIfSolutionFound();
    });

    function checkIfSolutionFound() {
        if (guessResults.length > 0 
        && guessResults[guessResults.length - 1].tank_id === solutionTank.tank_id) {
            setIsSolved(true);
        }
    };

    function onTankSelect(tank) {
        const compResult = compareTanks(tank, solutionTank);
        const newGuessResults = [...guessResults, compResult];
        setGuessResults(newGuessResults);
        localStorage.setItem(lsResults, JSON.stringify(newGuessResults));

        if (tank.tank_id === solutionTank.tank_id) {
            setIsSolved(true);
            saveResults(lsStats);
            console.log("Solved!");
        }
    };

    function saveResults(category) {
        const savedResults = JSON.parse(localStorage.getItem(category)) || [];
        const attempts = guessResults.length;
        const result = {dayId, attempts};

        savedResults.push(result);

        localStorage.setItem(category, JSON.stringify(savedResults));
    };


    return (
        <div>
            <Prompt solutionTank={solutionTank} guessResults={guessResults}/>
            <Search isSolved={isSolved} tanks={tanks} guessResults={guessResults} onTankSelect={onTankSelect}/>
            <Grid guessResults={guessResults} solutionTank={solutionTank}/>
            <EndDisplay 
                dayId={dayId} 
                isSolved={isSolved} 
                guessResults={guessResults} 
                solutionTank={solutionTank} 
                lsStats={lsStats}
            />

        </div>
    );
}

export default Game;