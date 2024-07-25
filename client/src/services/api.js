import axios from 'axios';

const API_URL = "http://localhost:3000/api";

export async function getSolutionTank() {
    const response = await axios.get(`${API_URL}/get-solution-tank`);
    return response.data;
}

export async function getTankList() {
    const response = await axios.get(`${API_URL}/get-tank-list`);
    return response.data;
}

export async function popPrevSolution() {
    const response = await axios.get(`${API_URL}/pop-prev-solution`);
    return response.data;
}
