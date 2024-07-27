import React from 'react';
import Timer from './timer.js';
import { calculateStreaks, calculateTotal, countOneShots, calculateAverageAttempts } from '../utils/stats.js';

export function EndDisplay({ isSolved, solutionTank, guessResults, lsStats }) {
    const results = JSON.parse(localStorage.getItem(lsStats)) || [];
    const streaks = calculateStreaks(results);
    const total = calculateTotal(results);
    const oneShots = countOneShots(results);
    const averageAttempts = calculateAverageAttempts(results);

    if (isSolved) {
        return (
            <div>
                <h1 className='text-3xl text-green-600'>You found the solution!</h1>
                <h1 className='text-blue-600'>{solutionTank.name}</h1>
                <h2 className='text-2xl'>Tries: {guessResults.length}</h2>
                <p>Total Solves: {total}</p>
                <p>One Shots: {oneShots}</p>
                <p>Max Streak: {streaks.max}</p>
                <p>Current Streak: {streaks.current}</p>
                <p>Average Attempts: {averageAttempts}</p>
                <Timer />
            </div>
        )
    }
}
