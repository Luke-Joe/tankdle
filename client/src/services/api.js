import axios from 'axios';

const TEST_API_URL = "http://localhost:3000/api";
const API_UFRL = "https://api.tankdle.ca/api";
const API_URL = TEST_API_URL

export async function getSolutionTank() {
    const response = await axios.get(`${API_URL}/get-solution-tank`);
    return response.data;
}

export async function getTankList(mode) {
    const response = await axios.post(`${API_URL}/get-tank-list`, {
        mode: mode
    });
    return response.data;
}

export async function getPrevSolution(dayId) {
    const response = await axios.post(`${API_URL}/get-prev-solution`, {
        dayId: dayId
    });
    return response.data;
}

export async function getSolvedCount(dayId, mode) {
    const response = await axios.post(`${API_URL}/get-solved-count`, {
        dayId: dayId,
        mode: mode
    });
    return response.data
}

export async function incrementSolvedCount(dayId, mode) {
    const response = await axios.post(`${API_URL}/increment-solved-count`, {
        dayId: dayId,
        mode: mode
    });
    return response.data;
}