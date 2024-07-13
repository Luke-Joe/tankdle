import {getSolutionTank} from '../models/tankModel.js';

export async function getSolutionTankHandler(req, res) {
    const tank = await getSolutionTank();
    res.json(tank);
}
