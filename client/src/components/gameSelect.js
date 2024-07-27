import React, { useEffect, useState } from 'react';
import Game from './tankdle.js';
import { getSolutionTank, getTankList } from '../services/api.js';

function GameSelect() {
    const [tankDataLow, setTankDataLow] = useState([]);
    const [solutionTankLow, setSolutionTankLow] = useState(null);
    const resultsLow = "resultsLow";
    const statsLow = "statsLow";

    const [tankDataHigh, setTankDataHigh] = useState([]);
    const [solutionTankHigh, setSolutionTankHigh] = useState(null);
    const resultsHigh = "resultsHigh";
    const statsHigh = "statsHigh";

    const [dayId, setDayId] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const tankDataLow = await getTankList("LOW");
                setTankDataLow(tankDataLow);

                const tankDataHigh = await getTankList("HIGH");
                setTankDataHigh(tankDataHigh);

                const solutionTank = await getSolutionTank();
                setSolutionTankLow(solutionTank.solutionTank.low);
                setSolutionTankHigh(solutionTank.solutionTank.high);
                setDayId(solutionTank.dayId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    if (!solutionTankLow || !solutionTankHigh) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <Game 
                tanks={tankDataLow}
                solutionTank={solutionTankLow}
                dayId={dayId}
                lsResults={resultsLow}
                lsStats={statsLow}
            /> */}
            <Game 
                tanks={tankDataHigh}
                solutionTank={solutionTankHigh}
                dayId={dayId}
                lsResults={resultsHigh}
                lsStats={statsHigh}
            />
        </div>
    )
}

export default GameSelect;