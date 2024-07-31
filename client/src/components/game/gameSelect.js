import React, { useEffect, useState } from 'react';
import Game from './tankdle.js';
import { getSolutionTank, getTankList, getPrevSolution } from '../../services/api.js';

function GameSelect({ gameMode }) {
    const [tankData, setTankData] = useState([]);
    const [solutionTank, setSolutionTank] = useState(null);
    const [prevSolution, setPrevSolution] = useState(null);
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

                const prevSolution = await getPrevSolution(solutionTank.dayId - 1);
                if (prevSolution) {
                    setPrevSolution(gameMode === 'low' ?
                        prevSolution.solutionTank.low :
                        prevSolution.solutionTank.high);
                }

                if (localStorage.getItem("dayId") != null && Number(localStorage.getItem("dayId")) !== solutionTank.dayId) {
                    console.log("Stored", localStorage.getItem("dayId"), "does not match", solutionTank.dayId);
                    localStorage.removeItem("resultsLow");
                    localStorage.removeItem("resultsHigh");
                    localStorage.removeItem("solvedCount")
                }

                localStorage.setItem("dayId", solutionTank.dayId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [gameMode]);

    if (!solutionTank || !prevSolution) {
        return <div>Loading...</div>;
    }

    return (
        <Game
            tanks={tankData}
            solutionTank={solutionTank}
            dayId={dayId}
            lsResults={resultsKey}
            lsStats={statsKey}
            prevSolution={prevSolution}
        />
    )
}

export default GameSelect;