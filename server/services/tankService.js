import axios from 'axios';
import { readData, storeData } from '../utils/fileUtils.js';
import {API_URL, APP_ID, TANK_DATA_FILE, TANK_SOL_FILE} from '../config/constants.js';

let tankData = [];
export async function fetchTankData() {
    try { 
        const response = await axios.get(API_URL, {
            params: {
                application_id: APP_ID,
                fields: "name,tank_id,tier,nation,type,is_premium,default_profile.gun.caliber",
            },
        });
        tankData = Object.values(response.data.data);
        storeData(TANK_DATA_FILE, tankData);
        return tankData;
    } catch (error) {
        console.error('Error fetching tank data:', error);
        return [];
    }
}

function loadTankData() {
    const data = readData(TANK_DATA_FILE);
    if (data) {
        tankData = data;
    }
}

// TODO: FIX DUPLICATE CHECK
function getRandomTank(excludeTank) {
    let randomTank;
    do {
        randomTank = tankData[Math.floor(Math.random() * tankData.length)];
    } while (excludeTank && randomTank.tank_id === excludeTank.tank_id);

    return randomTank;
}

export async function updateSolutionTank() {
    if (tankData.length === 0) {
        loadTankData();
    }

    if (tankData.length === 0) {
        tankData = await fetchTankData();
    }

    const prevSolTank = readData(TANK_SOL_FILE)?.solutionTank;
    const newSolTank = getRandomTank(prevSolTank);

    storeData(TANK_SOL_FILE, {solutionTank : newSolTank});
    return newSolTank;
}

export async function getSolutionTank() {
    if (!readData(TANK_SOL_FILE)) {
        await updateSolutionTank();
    }

    return readData(TANK_SOL_FILE)?.solutionTank;
}