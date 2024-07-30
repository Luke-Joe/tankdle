import React from 'react';
import Timer from './timer.js';
import Stats from './stats.js';
import NavButton from './navButton.js';

export function EndDisplay({ isSolved, solutionTank, guessResults, lsStats }) {
    function renderNavButton() {
        if (solutionTank.tier < 6) {
            return <NavButton to="/" text1="HOMEPAGE" highlightColour="wgreen" />
        } else {
            return <NavButton to="/low" text1="HARD MODE" text2="Tier I - V Vehicles" highlightColour="wgreen" />
        }
    }

    if (isSolved) {
        return (
            <div className="block items-center max-w-sm w-full mx-auto rounded-lg p-10 border-wgreen border
            text-white bg-wgray bg-opacity-50">
                <h1 className='text-3xl text-wgreen font-medium'>You found the solution!</h1>
                <div className="inline-flex items-center mt-4">
                    <img src={solutionTank.images.big_icon} alt={solutionTank.name} />
                    <div className="text-center ml-4">
                        <h1 className='bg-wgreen rounded px-2 py-1
                                        text-gray-200 font-bold text-2xl
                        '>{solutionTank.name}</h1>
                        <h2 className='text-xl font-semibold text-gray-200 mt-1'>TRIES: <span className="text-red-400 font-bold">{guessResults.length}</span></h2>
                    </div>
                </div>

                <Stats lsStats={lsStats} />
                <Timer />
                {renderNavButton()}
            </div>
        )
    }
}
