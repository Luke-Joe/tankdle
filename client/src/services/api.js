import axios from 'axios';

const API_URL = "http://localhost:3000/api";

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
