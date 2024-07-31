import React from 'react';

function GuessDisplay({ selectedTank }) {
    if (!selectedTank) {
        return <div>No tank selected</div>
    }

    return (
        <div>
            <h2>Name: {selectedTank.name}</h2>
            <p>Tier: {selectedTank.tier.value}</p>
            <p>ID: {selectedTank.tank_id}</p>
            <p>Class: {selectedTank.class.value}</p>
            <p>Nation: {selectedTank.nation.value}</p>
            <p>Caliber: {selectedTank.caliber.value}</p>
            <p>Premium: {selectedTank.type.value}</p>
        </div>
    )
}

export default GuessDisplay;