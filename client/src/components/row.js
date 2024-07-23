import React from "react"; 

/*
TEMPORARY COLOUR CODE:
- red: incorrect {}
- yellow: guess is higher than solution
- blue: guess is lower than solution
- green: guess is correct
*/
export default function Row({ guess }) {
    return (
        <div className="grid grid-rows-1 grid-cols-6 gap-1">
            <div>{guess.name}</div>
            <div className={guess.tier.comparison}>{guess.tier.value}</div>
            <div className={guess.nation.comparison}>{guess.nation.value}</div>
            <div className={guess.class.comparison}>{guess.class.value}</div>
            <div className={guess.type.comparison}>{guess.type.value}</div>
            <div className={guess.caliber.comparison}>{guess.caliber.value}</div>
        </div>
    )
}