import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const SUMMARIES_API = `${API_BASE}/summaries`;


export const findSummaries  = async ()     => {
    const response = await axios.get(SUMMARIES_API);
    return response.data;
}
