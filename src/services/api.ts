import axios from "axios";

export const api = axios.create({
    baseURL: process.env.ACTIVE_CAMPAIGN_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY
    }
});