import {getSolutionTank, getTankList} from '../models/tankModel.js';

export async function getSolutionTankHandler(req, res) {
    const tank = await getSolutionTank();
    res.json(tank);
}

export async function getTankListHandler(req, res) {
    const tankList = await getTankList();
    res.json(tankList);
}