import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';
import Search from './search.js';
import { compareTanks } from '../utils/comparisons.js';
import { Grid } from './grid.js';
import { EndDisplay } from './endDisplay.js';

function Game() {
    const [tanks, setTanks] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const [guessResults, setGuessResults] = useState([]);
    const [dayId, setDayId] = useState(null);
    const [isSolved, setIsSolved] = useState(false);
    const resultStorage = "resultStorage";

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
        localStorage.setItem('guessResults', JSON.stringify(newGuessResults));

        if (tank.tank_id === solutionTank.tank_id) {
            setIsSolved(true);
            saveResults(resultStorage);
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


    if (!solutionTank) {
        return <div>Loading...</div>;
    }
    // <h1 className='text-blue-600'>{solutionTank.name}</h1>
    return (
        <div>
            <Search isSolved={isSolved} tanks={tanks} guessResults={guessResults} onTankSelect={onTankSelect}/>
            <Grid guessResults={guessResults}/>
            <EndDisplay 
                dayId={dayId} 
                isSolved={isSolved} 
                guessResults={guessResults} 
                solutionTank={solutionTank} 
                resultStorage={resultStorage}
            />
        </div>
    );
}

export default Game;