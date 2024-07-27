import {getSolutionTank, getTankList, getSolutionByDayId} from '../models/tankModel.js';
import { HIGH_TANK_DATA_FILE, LOW_TANK_DATA_FILE } from '../config/constants.js';

export async function getSolutionTankHandler(req, res) {
    const tank = await getSolutionTank();
    res.json(tank);
}

export async function getTankListHandler(req, res) {
    const mode = req.body.mode;
    
    let tankList = null;
    if (mode == "HIGH") {
        tankList = await getTankList(HIGH_TANK_DATA_FILE);
    } else if (mode == "LOW") {
        tankList = await getTankList(LOW_TANK_DATA_FILE);
    } else {
        return res.status(400).json({error: "Invalid mode"});
    }

    res.json(tankList);
}

export async function getSolutionByDayIdHandler(req, res) {
    const dayId = req.body.dayId;
    const prevSol = await getSolutionByDayId(dayId);
    res.json(prevSol);
}