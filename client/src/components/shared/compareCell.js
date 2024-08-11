import React from 'react';
import substituteValues from '../../utils/mapValues.js';

export default function CompareCell({ guessAttribute }) {
    return (
        <div className={`${guessAttribute.comparison} compareCell relative`}>
            {guessAttribute.comparison === 'blue' && <img src="/arrow.svg" alt="Higher" className="absolute transform rotate-90 z-0 opacity-70 w-3/5 min-w-14" />}
            {guessAttribute.comparison === 'yellow' && <img src="/arrow.svg" alt="Lower" className="absolute transform -rotate-90 z-0 opacity-70 w-3/5 min-w-14" />}
            <div className="z-10">{substituteValues(guessAttribute)}</div>
        </div>
    )
}