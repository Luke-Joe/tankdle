import React from 'react';
import Row from './row.js';

export function Grid({ guessResults }) {

    const reversedResults = guessResults.slice().reverse();
    return ( 
        <div className='grid'>
            {reversedResults.map((guess, index) => {
                return <Row key={index} guess={guess} />
            })}
        </div>
    )
}