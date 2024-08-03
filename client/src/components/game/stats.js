import React, { useState } from 'react';
import { calculateStreaks, calculateTotal, countOneShots, calculateAverageAttempts } from '../../utils/stats.js';

function Stats({ lsStats }) {
    const [modalVisible, setModalVisible] = useState(true);

    const results = JSON.parse(localStorage.getItem(lsStats)) || [];
    const streaks = calculateStreaks(results);
    const total = calculateTotal(results);
    const oneShots = countOneShots(results);
    const averageAttempts = calculateAverageAttempts(results).toFixed(2);

    return (
        <div className="my-4">
            <button className={`bg-wyellow text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition-transform opacity-85 ${modalVisible ? 'bg-yellow-600' : ''}`} onClick={() => setModalVisible(!modalVisible)}>
                {modalVisible ? 'HIDE' : 'SHOW'} STATS
            </button>

            {modalVisible && (
                <div className="mt-4 bg-wblack bg-opacity-50 rounded px-4 py-3 shadow-lg border border-gray-500">
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <p className="border-b-2 border-wyellow text-xs font-medium">Total solves</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">One shots</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">Average guesses</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">Max streak</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">Current streak</p>
                        <p className="font-semibold">{total}</p>
                        <p className="font-semibold">{oneShots}</p>
                        <p className="font-semibold">{averageAttempts}</p>
                        <p className="font-semibold">{streaks.max}</p>
                        <p className="font-semibold">{streaks.current} 🔥</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Stats;