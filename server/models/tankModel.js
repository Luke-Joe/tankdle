import axios from 'axios';
import { readData, storeData, appendData } from '../utils/fileUtils.js';
import { updateData } from '../utils/dataProcessing.js';
import {
    VEHICLE_API_URL, 
    APP_ID, 
    LOW_TANK_DATA_FILE, 
    HIGH_TANK_DATA_FILE, 
    TANK_SOL_FILE, 
    PREV_SOL_FILE} from '../config/constants.js';

async function fetchLowTierTankData() {
    try {
        const response = await axios.get(VEHICLE_API_URL, {
            params: {
                application_id: APP_ID,
                fields: "name,tank_id,tier,nation,type,is_premium,images",
                tier: "1,2,3,4,5"
            },
        });
        let tankData = Object.values(response.data.data);
        tankData = await updateData(tankData);
        storeData(LOW_TANK_DATA_FILE, tankData);
        return tankData;
    } catch (error) {
        console.error('Error fetching low tier tank data:', error);
        return [];
    }
}

async function fetchHighTierTankData() {
    try {
        const response = await axios.get(VEHICLE_API_URL, {
            params: {
                application_id: APP_ID,
                fields: "name,tank_id,tier,nation,type,is_premium,images",
                tier: "6,7,8,9,10"
            },
        });
        let tankData = Object.values(response.data.data);
        tankData = await updateData(tankData);
        storeData(HIGH_TANK_DATA_FILE, tankData);
        return tankData;
    } catch (error) {
        console.error('Error fetching high tier tank data:', error);
        return [];
    }
}

export async function getTankList(data_file) {
    if (!readData(data_file)) {
        if (data_file === LOW_TANK_DATA_FILE) {
            await fetchLowTierTankData();
        } else if (data_file === HIGH_TANK_DATA_FILE) {
            await fetchHighTierTankData();
        } else {
            console.error("Invalid data file:", data_file);
            return [];
        }
    }

    return readData(data_file);
}


function getRandomTank(tankData, excludeTank) {
    let randomTank;
    do {
        randomTank = tankData[Math.floor(Math.random() * tankData.length)];
    } while (excludeTank && randomTank.tank_id === excludeTank.tank_id);

    return randomTank;
}

// TODO: Update solution tank for both low and high tier datasets

export async function updateSolutionTank() {
    try {    
        let tankDataLow = await getTankList(LOW_TANK_DATA_FILE);
        let tankDataHigh = await getTankList(HIGH_TANK_DATA_FILE);

        if (!Array.isArray(tankDataLow) || !Array.isArray(tankDataHigh)) {
            throw new Error('Tank data is not an array');
        }

        const prevSol = readData(TANK_SOL_FILE);
        const prevSolTank = prevSol?.solutionTank
        savePrevSol();

        const newSolTankLow = getRandomTank(tankDataLow, prevSolTank.low);
        const newSolTankHigh = getRandomTank(tankDataHigh, prevSolTank.high);
        const newDayId = (prevSol.dayId || 0) + 1;

        const newSol = {solutionTank : { low : newSolTankLow, high : newSolTankHigh}, dayId : newDayId}

        storeData(TANK_SOL_FILE, newSol);

        return newSol;
    } catch (error) {
        console.error('Error updating solution tank:', error);
        return null;
    }
}

export async function getSolutionTank() {
    if (!readData(TANK_SOL_FILE)) {
        await updateSolutionTank(await getTankList());
    }

    const data = readData(TANK_SOL_FILE);
    return data;
}

async function savePrevSol() {
    const prevData = readData(TANK_SOL_FILE);
    if (prevData) {
        appendData(PREV_SOL_FILE, prevData);
    }

    console.log("Saved previous solution tank");
}

export async function getSolutionByDayId(dayId) {
    const prevData = readData(PREV_SOL_FILE);

    if (prevData && prevData.length > 0) {
        const solution = prevData.find(sol => sol.dayId === dayId);
        return solution || null;
    }

    return null;
}



