import {getSolutionTank, getTankList, popPrevSolution} from '../models/tankModel.js';

export async function getSolutionTankHandler(req, res) {
    const tank = await getSolutionTank();
    res.json(tank);
}

export async function getTankListHandler(req, res) {
    const tankList = await getTankList();
    res.json(tankList);
}

export async function popPrevSolutionHandler(req, res) {
    const prevSol = await popPrevSolution();
    res.json(prevSol);
}