import React from 'react';
import Row from './row.js';

export function Grid({ guessResults }) {
    const rows = [];

    for (let i = guessResults.length - 1; i >= 0; i--) {
        rows.push(<Row key={i} guess={guessResults[i]} />);
    }
    
    return ( 
        <div className='grid max-w-2xl mx-auto w-full bg-transparent gap-1 my-10 overflow-y-scroll'>
            <div className='grid grid-rows-1 grid-cols-6 text-white'>
                <div>Tank</div>
                <div>Tier</div>
                <div>Nation</div>
                <div>Class</div>
                <div>Type</div>
                <div>Caliber</div>
            </div>
            {rows}
        </div>
    )
}