import React from 'react';
import Row from './row.js';

export function Grid({ guessResults }) {
    return ( 
        <div>
            {guessResults.map((guess, index) => {
                return <Row key={index} guess={guess} />
            })}
        </div>
    )
}