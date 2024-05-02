import axios from "axios";

const instance = axios.create({
    baseURL: "https://beandrepublic-back-api.onrender.com/",
    withCredentials:true,
});

export default instance;