import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const VEHICLE_API_URL = "https://api.worldoftanks.com/wot/encyclopedia/vehicles/";
export const VEHICLE_CONFIG_API_URL = "https://api.worldoftanks.com/wot/encyclopedia/vehicleprofiles/";
export const VEHICLE_STAT_API_URL = "https://api.worldoftanks.com/wot/encyclopedia/vehicleprofile/"
export const BLITZ_API_URL = "https://api.wotblitz.com/wotb/encyclopedia/vehicles/";
export const APP_ID = "c1eff31a5be5648b3b8ed22d23f2d94d";
export const TANK_DATA_FILE = path.resolve(__dirname, '../data/tankData.json');
export const TANK_SOL_FILE = path.resolve(__dirname, '../data/tankSol.json');
export const PREV_SOL_FILE = path.resolve(__dirname, '../data/prevSols.json');
