import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://amazonapi-1264.onrender.com",
});

export { axiosInstance };
