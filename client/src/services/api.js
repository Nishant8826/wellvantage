import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})


export const fetchAllLeads = async () => {
    try {
        const resp = await api.get(`/lead/all`, { withCredentials: true });
        return resp.data;
    } catch (error) {
        throw error;
    }
}

export const updateLead = async (requestIndo) => {
    try {
        const resp = await api.put(`/lead/update`, requestIndo, { withCredentials: true });
        return resp.data;
    } catch (error) {
        throw error;
    }
}


export default api;