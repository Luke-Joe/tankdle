import {getSolutionTank} from '../services/tankService.js';

export async function getSolutionTankHandler(req, res) {
    const tank = await getSolutionTank();
    res.json(tank);
}
