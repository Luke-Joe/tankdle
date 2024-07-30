import React, { useState } from 'react';
import { calculateStreaks, calculateTotal, countOneShots, calculateAverageAttempts } from '../utils/stats.js';

function Stats({ lsStats}) {
    const [modalVisible, setModalVisible] = useState(false);

    const results = JSON.parse(localStorage.getItem(lsStats)) || [];
    const streaks = calculateStreaks(results);
    const total = calculateTotal(results);
    const oneShots = countOneShots(results);
    const averageAttempts = calculateAverageAttempts(results).toFixed(2);

    return (
        <div className="my-4">
            <button className="bg-wgreen text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition-transform" onClick={() => setModalVisible(!modalVisible)}>SHOW STATS</button>

            {modalVisible && (
                <div className="mt-4 bg-wblack bg-opacity-50 rounded px-4 py-3 shadow-lg border border-gray-500">
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <p className="border-b-2 border-wyellow text-xs font-medium">Total solves</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">One shots</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">Average guesses</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">Max streak</p>
                        <p className="border-b-2 border-wyellow text-xs font-medium">Current streak</p>
                        <p>{total}</p>
                        <p>{oneShots}</p>
                        <p>{averageAttempts}</p>
                        <p>{streaks.max}</p>
                        <p>{streaks.current}</p>
                    </div>
                </div>
                )}
        </div>
    )
}

export default Stats;