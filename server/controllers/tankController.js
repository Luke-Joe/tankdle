import {getSolutionTank, getTankList, getSolutionByDayId} from '../models/tankModel.js';

export async function getSolutionTankHandler(req, res) {
    const tank = await getSolutionTank();
    res.json(tank);
}

export async function getTankListHandler(req, res) {
    const tankList = await getTankList();
    res.json(tankList);
}

export async function getSolutionByDayIdHandler(req, res) {
    const dayId = req.body.dayId;
    const prevSol = await getSolutionByDayId(dayId);
    res.json(prevSol);
}