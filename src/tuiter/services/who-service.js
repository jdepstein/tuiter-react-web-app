import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const WHO_API = `${API_BASE}/who`;


export const findWho = async () => {
    const response = await axios.get(WHO_API);
    return response.data;
}
