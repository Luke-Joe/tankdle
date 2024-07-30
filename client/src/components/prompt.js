import React from 'react';

export default function Prompt({ solutionTank, guessResults }) {
    return (
        <div className="block items-center max-w-sm mx-auto w-full h-28 p-4 bg-opacity-50 rounded-sm
                        bg-wblack border-t border-wyellow
        ">
            <h2 className="text-white text-center text-xl">Guess today's tank!</h2>
            <hr className="mt-3 mx-auto w-2/5 border-wyellow"/>
        </div>
    )
}