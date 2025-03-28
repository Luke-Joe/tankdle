import React, { useState, useEffect } from 'react';
import Timer from '../shared/timer.js';
import Stats from './stats.js';
import NavButton from '../shared/navButton.js';
import GraphModal from './graphModal.js';
import { getSolvedCount } from '../../services/api.js';

export function EndDisplay({ dayId, isSolved, solutionTank, guessResults, lsStats, solvedCount }) {

    function renderNavButton() {
        if (solutionTank.tier < 6) {
            return <NavButton to="/" text1="HOMEPAGE" highlightColour="wgreen" />
        } else {
            return <NavButton to="/low" text1="HARD MODE" text2="Tier I - V Vehicles" highlightColour="wgreen" />
        }
    }

    // useEffect(() => {
    //     if (isSolved && solvedCount === null) {
    //         async function fetchSolvedCount() {
    //             try {
    //                 const count = await getSolvedCount(dayId);
    //                 setSolvedCount(count);
    //                 localStorage.setItem(solutionTank.tier < 6 ? 'solvedCountLow' : 'solvedCountHigh', count);
    //             } catch (error) {
    //                 console.error('Failed to fetch solved count:', error);
    //             }
    //         }

    //         fetchSolvedCount();
    //     }
    // }, [dayId, isSolved, solvedCount]);

    if (isSolved) {
        return (
            <div className="block items-center max-w-sm w-full mx-auto rounded-lg p-10 border-wgreen border
            text-white bg-wgray bg-opacity-50">
                <h1 className='text-3xl text-wgreen font-medium'>GG!</h1>
                <div className="inline-flex items-center mt-4">
                    <img src={solutionTank.images.big_icon} alt={solutionTank.name} />
                    <div className="text-center ml-4">
                        <h1 className='bg-wgreen rounded px-2 py-1
                                        text-gray-200 font-bold text-2xl
                        '>{solutionTank.name}</h1>
                        <h2 className='text-xl font-semibold text-gray-200 mt-1'>TRIES: <span className="text-red-400 font-bold">{guessResults.length}</span></h2>
                    </div>
                </div>

                {solvedCount && <div className="mt-2">You're the <span className='text-orange-500'>{solvedCount}</span> person to find the solution!</div>}

                <Stats lsStats={lsStats} />
                <GraphModal lsStats={lsStats} />
                <Timer />
                {renderNavButton()}
            </div>
        )
    }
}
