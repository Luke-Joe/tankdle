import React, { useState, useEffect, useRef } from 'react';
import { calculateStreaks, calculateTotal, countOneShots, calculateAverageAttempts } from '../../utils/stats.js';
import Modal from '../shared/modal.js';
import LineChart from '../shared/lineChart.js';

function GraphModal({ lsStats }) {
    const results = JSON.parse(localStorage.getItem(lsStats)) || [];
    const streaks = calculateStreaks(results);
    const total = calculateTotal(results);
    const oneShots = countOneShots(results);
    const averageAttempts = calculateAverageAttempts(results).toFixed(2);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="my-4">
            <button className="bg-wyellow text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition-transform opacity-85" onClick={toggleModal}>VIEW GRAPH</button>
            <Modal show={showModal} onClose={toggleModal}>
                <h2 className="text-wyellow font-bold text-2xl text-left">STATISTICS</h2>
                <hr className="mb-4" />
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
                    <p className="font-semibold">{streaks.current}</p>
                </div>
                <LineChart data={results} />
            </Modal>
        </div>
    )
}

export default GraphModal;
