import React from 'react';
import substituteValues from '../utils/mapValues.js';

export default function CompareCell({ guessAttribute }) {
    return (
        <div className={`${guessAttribute.comparison} compareCell relative`}>
            <div className="z-9">{substituteValues(guessAttribute)}</div>
            {guessAttribute.comparison === 'blue' && <img src="/arrow.svg" alt="Higher" className="absolute transform rotate-90 z-0 opacity-30 w-3/5" />}
            {guessAttribute.comparison === 'yellow' && <img src="/arrow.svg" alt="Lower" className="absolute transform -rotate-90 z-0 opacity-30 w-3/5" />}
        </div>
    )
}