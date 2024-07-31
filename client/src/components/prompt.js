import React, { useState, useEffect } from 'react';

export default function Prompt({ solutionTank, guessResults, isSolved }) {
    const [visibleHint, setVisibleHint] = useState(null);

    const [button1Disabled, setButton1Disabled] = useState(true);
    const [button2Disabled, setButton2Disabled] = useState(true);
    const [button3Disabled, setButton3Disabled] = useState(true);

    const hint1Count = 4;
    const hint2Count = 6;
    const hint3Count = 9;

    useEffect(() => {
        if (guessResults.length >= hint1Count) {
            setButton1Disabled(false);
        }
        if (guessResults.length >= hint2Count) {
            setButton2Disabled(false);
        }
        if (guessResults.length >= hint3Count) {
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
            <hr className="mt-3 mx-auto w-2/5 border-wyellow" />
            <div className={`flex flex-grow justify-between px-10 ${guessResults.length < 2 ? 'hidden' : ''}`}>
                <div className="flex flex-col items-center">
                    <button
                        className={`mt-4 p-2 bg-wyellow text-wblack rounded ${button1Disabled ? 'opacity-50' : 'transform hover:scale-105 transition-transform'} ${visibleHint === 1 ? 'bg-yellow-600' : 'bg-wyellow'}`}
                        onClick={() => showHint(1)}
                        disabled={button1Disabled}
                    >
                        <span>Caliber hint</span>
                    </button>
                    {button1Disabled && <span className="text-xs mt-1 text-gray-500"> Available in {hint1Count - guessResults.length} tries</span>}
                </div>

                <div className="flex flex-col items-center">
                    <button
                        className={`mt-4 p-2 bg-wyellow text-wblack rounded ${button2Disabled ? 'opacity-50' : 'transform hover:scale-105 transition-transform'} ${visibleHint === 2 ? 'bg-yellow-600' : 'bg-wyellow'}`}
                        onClick={() => showHint(2)}
                        disabled={button2Disabled}
                    >
                        <span>Icon hint</span>
                    </button>
                    {button2Disabled && <span className="text-xs mt-1 text-gray-500"> Available in {hint2Count - guessResults.length} tries</span>}
                </div>

                <div className="flex flex-col items-center">
                    <button
                        className={`mt-4 p-2 bg-wyellow text-wblack rounded ${button3Disabled ? 'opacity-50' : 'transform hover:scale-105 transition-transform'} ${visibleHint === 3 ? 'bg-yellow-600' : 'bg-wyellow'}`}
                        onClick={() => showHint(3)}
                        disabled={button3Disabled}
                    >
                        <span>Visual hint</span>
                    </button>
                    {button3Disabled && <span className="text-xs mt-1 text-gray-500"> Available in {hint3Count - guessResults.length} tries</span>}
                </div>
            </div>
            <div className="flex items-center justify-center mt-2">
                {visibleHint === 1 && <span className="text-white text-center font-semibold text-2xl p-5 border border-wgray rounded">{solutionTank.caliber}mm</span>}
                {visibleHint === 2 && <img className="flex items-center p-5 border border-wgray rounded" src={solutionTank.images.contour_icon} alt="contour hint"></img>}
                {visibleHint === 3 && <img className="flex items-center border border-wgray rounded" src={solutionTank.images.big_icon} alt="big icon hint"></img>}
            </div>
        </div >
    )
}