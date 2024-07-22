import React, { useState, useEffect } from 'react';
import { getSolutionTank, getTankList } from '../services/api.js';
import Search from './search.js';
import GuessDisplay from './guessDisplay.js';
import { 
    compareClass, 
    compareTier,
    compareNation,
    compareGunCaliber,
    compareType
} from '../utils/comparisons.js';

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

    function onTankSelect(tank) {
        const compResult = compareTanks(tank, solutionTank);
        setGuesses([...guesses, tank]);

        console.log(compResult);
        
    };

    function compareTanks(guess, solution) {
        const result = {
            name: guess.name,
            tier: compareTier(guess, solution),
            nation: compareNation(guess, solution),
            class: compareClass(guess, solution),
            gunCaliber: compareGunCaliber(guess, solution),
            type: compareType(guess, solution),
        };

        return result;
    }

    if (!solutionTank) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Search tanks={tanks} guesses={guesses} onTankSelect={onTankSelect}/>
            <h1>{solutionTank.name}</h1>
            {guesses.map(guess => (
                <GuessDisplay selectedTank={guess}/>
            ))}
        </div>
    );
}

export default Game;