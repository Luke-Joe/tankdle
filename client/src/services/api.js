import axios from 'axios';

const API_URL = "http://localhost:3000/api";

export const getSolutionTank = async () => {
    const response = await axios.get(`${API_URL}/get-solution-tank`);
    return response.data;
}

export const getTankList = async () => {
    const response = await axios.get(`${API_URL}/get-tank-list`);
    return response.data;
}
