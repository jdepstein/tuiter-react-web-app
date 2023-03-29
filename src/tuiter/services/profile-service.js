import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const PROFILE_API = `${API_BASE}/profile`;


export const findProfile  = async ()     => {
    const response = await axios.get(PROFILE_API);
    return response.data;
}

export const updateProfile = async (profile) => {
    const response = await axios
        .put(`${PROFILE_API}/${profile.handle}`, profile);
    return profile;
}