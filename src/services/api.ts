import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN,
    }
});