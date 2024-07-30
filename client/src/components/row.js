import React from "react"; 
import CompareCell from "./compareCell.js";

/*
COLOUR CODE:
- red: incorrect {}
- yellow: guess is higher than solution
- blue: guess is lower than solution
- green: guess is correct
*/

export default function Row({ guess, solutionTank }) {
    return (
        <div id="row" className="grid grid-rows-1 grid-cols-6 gap-1">
            <div className={`compareCell ${guess.tank_id === solutionTank.tank_id ? 'bg-wgreen bg-opacity-50' : ''}`}>
                <img src={guess.images.big_icon} alt={guess.name} />
            </div>

            {
            Object.entries(guess)
                .filter(([key, attribute]) => attribute.comparison && attribute.value)
                .map(([key, attribute]) => {
                    return <CompareCell key={key} guessAttribute={attribute}/>
                })
            }
        </div>
    )
}