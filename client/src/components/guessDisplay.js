import React from 'react';

function GuessDisplay({ selectedTank }) {
    if (!selectedTank) {
        return <div>No tank selected</div>
    }

    return (
        <div>
            <h2>Name: {selectedTank.name}</h2>
            <p>Tier: {selectedTank.tier}</p>
        </div>
    )
}

export default GuessDisplay;