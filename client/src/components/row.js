import React from "react"; 

export default function Row({ guess }) {
    return (
        <div className="grid grid-rows-1 grid-cols-6 gap-1">
            <div>{guess.name}</div>
            <div>{guess.tier.value}</div>
            <div>{guess.nation.value}</div>
            <div>{guess.class.value}</div>
            <div>{guess.type.value}</div>
            <div>{guess.caliber.value}</div>
        </div>
    )
}