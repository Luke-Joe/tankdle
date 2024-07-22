import React from "react"; 

export default function Row({ guess }) {
    return (
        <div className="row">
            <div>{guess.name}</div>
            <div>{guess.tier.value}</div>
        </div>
    )
}