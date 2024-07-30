import React from 'react';
import Row from './row.js';

export function Grid({ guessResults, solutionTank }) {
    const rows = [];

    for (let i = guessResults.length - 1; i >= 0; i--) {
        rows.push(<Row key={i} guess={guessResults[i]} solutionTank={solutionTank} />);
    }
    
    return ( 
        <div className='grid max-w-2xl mx-auto w-full bg-transparent gap-1 my-10 overflow-y-scroll'>
            <div className='grid grid-rows-1 grid-cols-6 text-white'>
                <div className='border-b-2 border-white'>Tank</div>
                <div className='border-b-2 border-white'>Tier</div>
                <div className='border-b-2 border-white'>Nation</div>
                <div className='border-b-2 border-white'>Class</div>
                <div className='border-b-2 border-white'>Type</div>
                <div className='border-b-2 border-white'>Caliber (mm)</div>
            </div>
            {rows}
        </div>
    )
}