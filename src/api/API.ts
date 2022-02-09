import axios from 'axios'

export default axios.create({
    baseURL: process.env.NODE_ENV === "production" ? process.env.API_URI : "/api/v1/",
    withCredentials: true,
})