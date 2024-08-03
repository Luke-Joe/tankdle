import React, { useState, useEffect, useRef } from 'react';
import Prompt from './prompt.js';
import Search from '../search/search.js';
import { compareTanks } from '../../utils/comparisons.js';
import Grid from '../shared/grid.js';
import { EndDisplay } from './endDisplay.js';
import { incrementSolvedCount } from '../../services/api.js';
import ReactConfetti from 'react-confetti';

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

    function checkIfSolutionExists() {
        if (guessResults.length > 0
            && guessResults[guessResults.length - 1].tank_id === solutionTank.tank_id) {
            setIsSolved(true);
        }
    };

    async function onTankSelect(tank) {
        const guessResult = compareTanks(tank, solutionTank);
        updateGuessResults(guessResult);
        await checkGuessCorrectness(tank);
    };

    function updateGuessResults(guessResult) {
        const newGuessResults = [...guessResults, guessResult];
        setGuessResults(newGuessResults);
        localStorage.setItem(lsResults, JSON.stringify(newGuessResults));
    }

    async function checkGuessCorrectness(tank) {
        if (tank.tank_id === solutionTank.tank_id) {
            setIsSolved(true);
            saveResults(lsStats);
            await updateSolvedCount();
            setUseConfetti(true);
            console.log("Solved!");
        }
    }

    async function updateSolvedCount() {
        const newSolvedCount = await incrementSolvedCount(dayId, mode)
        setSolvedCount(newSolvedCount);
        localStorage.setItem(mode === 'LOW' ? 'solvedCountLow' : 'solvedCountHigh', newSolvedCount);
    }

    function saveResults(category) {
        const savedResults = JSON.parse(localStorage.getItem(category)) || [];
        const attempts = guessResults.length;
        const result = { dayId, attempts };

        savedResults.push(result);

        localStorage.setItem(category, JSON.stringify(savedResults));
    };


    return (
        <div>
            <Prompt solutionTank={solutionTank} guessResults={guessResults} />
            <Search isSolved={isSolved} tanks={tanks} guessResults={guessResults} onTankSelect={onTankSelect} />
            <p className="text-white mt-4">Yesterday's solution was <span className="text-wyellow">#{dayId - 1}</span> <span className="text-orange-500 font-semibold">{prevSolution.name}</span></p>
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
            {useConfetti && <ReactConfetti recycle={false} numberOfPieces={300} tweenDuration={20000} height={window.innerHeight * 1.5} width={window.innerWidth} />}
        </div>
    );
}

export default Game;