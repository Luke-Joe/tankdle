import axios from "axios";
import { VEHICLE_STAT_API_URL, VEHICLE_CONFIG_API_URL, APP_ID } from "../config/constants.js";

let delay = 500;

export async function updateData(tankData) {
    tankData = filterData(tankData);
    tankData = await processData(tankData);

    return tankData;
}

async function processData(tankData) {
    let result = [];

    for (const tank of tankData) {
        await new Promise(resolve => setTimeout(resolve, delay));
        const updatedTank = await updateGunData(tank);
        result.push(updatedTank);
    }

    return result;
}

async function updateGunData(tank) {
    console.log("Processing:",tank.name);
    let topConfig = await getTopConfig(tank);
    let gunStats = await getGunStats(tank, topConfig);
    tank.caliber = gunStats.caliber;
    tank.alpha = gunStats.alpha;
    return tank;
}

async function getTopConfig(tank) {
    try {
        // Returns configurations sorted from highest to lowest price
        const response = await axios.get(VEHICLE_CONFIG_API_URL, {
            params: {
                application_id: APP_ID,
                tank_id: tank.tank_id,
                order_by: "price_credit"
            },
        });

        let topConfig = response.data.data[tank.tank_id][0].profile_id;
        return topConfig;
    } catch (error) {
        console.error('Error fetching tank config data:', error);
        return null;
    }
}

async function getGunStats(tank, topConfig) {
    try {
        const response = await axios.get(VEHICLE_STAT_API_URL, {
            params: {
                application_id: APP_ID,
                tank_id: tank.tank_id,
                profile_id: topConfig,
            },
        });

        let caliber = response.data.data[tank.tank_id].gun.caliber;
        let alpha = response.data.data[tank.tank_id].ammo[0].damage[1];
        
        return {
            caliber: caliber,
            alpha: alpha
         };
    } catch (error) {
        console.error('Error fetching gun stats:', error);
        return null;
    }
}

function filterData(tankData) {
    return tankData.filter(tank => {
        return !tank.name.endsWith(" FL") && !tank.name.endsWith(" CL");
    })
}