import React from 'react';
import Timer from './timer.js';

export function EndDisplay({ isSolved, solutionTank, guessResults }) {

    if (isSolved) {
        return (
            <div>
                <h1 className='text-3xl text-green-600'>You found the solution!</h1>
                <h2 className='text-2xl'>Tries: {guessResults.length}</h2>
                <Timer />
            </div>
        )
    }
}
