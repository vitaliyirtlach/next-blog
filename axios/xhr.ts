import axios from "axios"
export const xhr = axios.create({
    baseURL: process.env.API_URL
})