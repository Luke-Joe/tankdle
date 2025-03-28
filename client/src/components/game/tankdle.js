import React, { useState, useEffect, useRef } from 'react';
import Prompt from './prompt.js';
import Search from '../search/search.js';
import { compareTanks } from '../../utils/comparisons.js';
import Grid from '../shared/grid.js';
import { EndDisplay } from './endDisplay.js';
import { incrementSolvedCount } from '../../services/api.js';
import ConfettiExplosion from 'react-confetti-explosion';

function Game({ tanks, solutionTank, dayId, lsResults, lsStats, prevSolution }) {
    const initialSolvedCount = JSON.parse(localStorage.getItem(solutionTank.tier < 6 ? 'solvedCountLow' : 'solvedCountHigh'));
    const [guessResults, setGuessResults] = useState([]);
    const [isSolved, setIsSolved] = useState(false);
    const [useConfetti, setUseConfetti] = useState(false);
    const [solvedCount, setSolvedCount] = useState(initialSolvedCount);
    const endDisplayRef = useRef(null);
    const mode = solutionTank.tier < 6 ? "LOW" : "HIGH";


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
        checkIfSolutionExists();
    });

    useEffect(() => {
        if (isSolved && endDisplayRef.current) {
            endDisplayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isSolved])

    useEffect(() => {

    }, [guessResults]);

    function checkIfSolutionExists() {
        if (guessResults.length > 0
            && guessResults[guessResults.length - 1].tank_id === solutionTank.tank_id) {
            setIsSolved(true);
        }
    };

    async function onTankSelect(tank) {
        const guessResult = compareTanks(tank, solutionTank);
        const newGuessResults = updateGuessResults(guessResult);
        await checkGuessCorrectness(tank, newGuessResults);
    };

    function updateGuessResults(guessResult) {
        const newGuessResults = [...guessResults, guessResult];
        setGuessResults(newGuessResults);
        localStorage.setItem(lsResults, JSON.stringify(newGuessResults));

        return newGuessResults;
    }

    async function checkGuessCorrectness(tank, newGuessResults) {
        if (tank.tank_id === solutionTank.tank_id) {
            const ranking = await updateSolvedCount();
            saveResults(lsStats, newGuessResults, ranking);
            setIsSolved(true);
            setUseConfetti(true);
            console.log("Solved!");
        }
    }

    async function updateSolvedCount() {
        const newSolvedCount = await incrementSolvedCount(dayId, mode)
        setSolvedCount(newSolvedCount);
        localStorage.setItem(mode === 'LOW' ? 'solvedCountLow' : 'solvedCountHigh', newSolvedCount);
        return newSolvedCount;
    }

    function saveResults(category, newGuessResults, ranking) {
        const savedResults = JSON.parse(localStorage.getItem(category)) || [];
        const attempts = newGuessResults.length;
        const now = new Date();
        let date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
        date = date.toISOString().split('T')[0];
        const result = { dayId, attempts, ranking, date };

        savedResults.push(result);

        localStorage.setItem(category, JSON.stringify(savedResults));
    };


    return (
        <div>
            <Prompt solutionTank={solutionTank} guessResults={guessResults} />
            <Search isSolved={isSolved} tanks={tanks} guessResults={guessResults} onTankSelect={onTankSelect} />
            {prevSolution && <p className="text-white mt-4">Yesterday's solution was <span className="text-wyellow">#{dayId - 1}</span> <span className="text-orange-500 font-semibold">{prevSolution.name}</span></p>}
            <Grid guessResults={guessResults} solutionTank={solutionTank} />
            <div ref={endDisplayRef}>
                <EndDisplay
                    dayId={dayId}
                    isSolved={isSolved}
                    guessResults={guessResults}
                    solutionTank={solutionTank}
                    lsStats={lsStats}
                    solvedCount={solvedCount}
                />
            </div>

            {
                useConfetti && <div className="confetti">
                    <ConfettiExplosion force={0.7} />
                </div>
            }

        </div>
    );
}

export default Game;