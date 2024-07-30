import React, { useState, useEffect } from 'react';

export default function Prompt({ solutionTank, guessResults, isSolved }) {
    const [visibleHint, setVisibleHint] = useState(null);

    const [button1Disabled, setButton1Disabled] = useState(true);
    const [button2Disabled, setButton2Disabled] = useState(true);
    const [button3Disabled, setButton3Disabled] = useState(true);

    useEffect(() => {
        if (guessResults.length >= 3) {
            setButton1Disabled(false);
        }
        if (guessResults.length >= 6) {
            setButton2Disabled(false);
        }
        if (guessResults.length >= 9) {
            setButton3Disabled(false);
        }
    }, [guessResults]);

        const showHint = (hintNumber) => {
        setVisibleHint(visibleHint === hintNumber ? null : hintNumber);
    };

    return (
        <div className="block items-center max-w-sm mx-auto w-full  p-4 bg-opacity-50 rounded-sm
                        bg-wblack border-t border-wyellow
        ">
            <h2 className="text-white text-center text-xl">Guess today's tank!</h2>
            <hr className="mt-3 mx-auto w-2/5 border-wyellow"/>
            <div className="flex space-x-4">
                <button
                    className={`mt-4 p-2 bg-wyellow text-wblack rounded ${button1Disabled ? 'opacity-50' : ''}`}
                    onClick={() => showHint(1)}
                    disabled={button1Disabled}
                >
                    {button1Disabled ? 'Hint 1 (Available after 3 guesses)' : 'Show Hint 1'}
                </button>

                <button
                    className={`mt-4 p-2 bg-wyellow text-wblack rounded ${button2Disabled ? 'opacity-50' : ''}`}
                    onClick={() => showHint(2)}
                    disabled={button2Disabled}
                >
                    {button2Disabled ? 'Hint 2 (Available after 6 guesses)' : 'Show Hint 2'}
                </button>

                <button
                    className={`mt-4 p-2 bg-wyellow text-wblack rounded ${button3Disabled ? 'opacity-50' : ''}`}
                    onClick={() => showHint(3)}
                    disabled={button3Disabled}
                >
                    {button3Disabled ? 'Hint 3 (Available after 9 guesses)' : 'Show Hint 3'}
                </button>
            </div>
            <div className="flex items-center justify-center mt-2">
                {visibleHint === 1 && <span className="text-white text-center font-semibold text-2xl p-5">{solutionTank.alpha}</span>}
                {visibleHint === 2 && <img className="flex items-center p-5"src={solutionTank.images.contour_icon} alt="contour hint"></img>}
                {visibleHint === 3 && <img className="flex items-center "src={solutionTank.images.big_icon} alt="big icon hint"></img>}
            </div>
        </div>
    )
}