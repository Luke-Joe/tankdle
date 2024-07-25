import axios from 'axios';
import { readData, storeData, appendData } from '../utils/fileUtils.js';
import {API_URL, APP_ID, TANK_DATA_FILE, TANK_SOL_FILE, PREV_SOL_FILE} from '../config/constants.js';

export async function fetchTankData() {
    try { 
        const response = await axios.get(API_URL, {
            params: {
                application_id: APP_ID,
                fields: "name,tank_id,tier,nation,type,is_premium,default_profile.gun.caliber",
            },
        });
        let tankData = Object.values(response.data.data);
        tankData = updateData(tankData);
        storeData(TANK_DATA_FILE, tankData);
        return tankData;
    } catch (error) {
        console.error('Error fetching tank data:', error);
        return [];
    }
}

export async function getTankList() {
    if (!readData(TANK_DATA_FILE)) {
        await fetchTankData();
    }

    return readData(TANK_DATA_FILE);
}

function updateData(tankData) {
    tankData = filterData(tankData);

    return tankData;
}

function updateGunInformation(tankData) {
    
}

function filterData(tankData) {
    return tankData.filter(tank => {
        return !tank.name.endsWith(" FL") && !tank.name.endsWith(" CL");
    })
}

function getRandomTank(tankData, excludeTank) {
    let randomTank;
    do {
        randomTank = tankData[Math.floor(Math.random() * tankData.length)];
    } while (excludeTank && randomTank.tank_id === excludeTank.tank_id);

    return randomTank;
}

export async function updateSolutionTank() {
    let tankData = await getTankList();

    const prevData = readData(TANK_SOL_FILE);
    const prevSolTank = prevData?.solutionTank
    savePrevSol();
    const newSolTank = getRandomTank(tankData, prevSolTank);
    const newDayId = (prevData.dayId || 0) + 1;

    storeData(TANK_SOL_FILE, {solutionTank : newSolTank, dayId : newDayId});
    return { solutionTank : newSolTank, dayId : newDayId };
}

export async function getSolutionTank() {
    if (!readData(TANK_SOL_FILE)) {
        await updateSolutionTank(await getTankList());
    }

    const data = readData(TANK_SOL_FILE);
    return { solutionTank: data.solutionTank, dayId: data.dayId};
}

async function savePrevSol() {
    const prevData = readData(TANK_SOL_FILE);
    if (prevData) {
        appendData(PREV_SOL_FILE, prevData);
    }

    console.log("Saved previous solution tank:", prevData.solutionTank.name);
}

export async function popPrevSolution() {
    const prevData = readData(PREV_SOL_FILE);

    if (prevData && prevData.length > 0) {
        return prevData.pop();
    }

    return null;
}



