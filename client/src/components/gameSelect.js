import React, { useEffect, useState } from 'react';
import Game from './tankdle.js';
import { getSolutionTank, getTankList } from '../services/api.js';

function GameSelect({ gameMode }) {
    const [tankData, setTankData] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const resultsKey = gameMode === "low" ? "resultsLow" : "resultsHigh";
    const statsKey = gameMode === "low" ? "statsLow" : "statsHigh";

    const [dayId, setDayId] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const tankData = await getTankList(gameMode.toUpperCase());
                setTankData(tankData);

                const solutionTank = await getSolutionTank();
                setSolutionTank(gameMode === 'low' ? 
                    solutionTank.solutionTank.low : 
                    solutionTank.solutionTank.high);
                setDayId(solutionTank.dayId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [gameMode]);

    if (!solutionTank) {
        return <div>Loading...</div>;
    }

    return (
        <Game 
            tanks={tankData}
            solutionTank={solutionTank}
            dayId={dayId}
            lsResults={resultsKey}
            lsStats={statsKey}
        />
    )
}

export default GameSelect;