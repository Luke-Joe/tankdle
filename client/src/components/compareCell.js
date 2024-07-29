import React from 'react';

export default function CompareCell({ guessAttribute }) {
    return (
    <div className={`${guessAttribute.comparison} compareCell
    `}>
        {guessAttribute.value}
    </div>
    )
}