const { default: axios } = require("axios");

const api = axios.create({
    baseURL:"/api",
    headers:{
        "Content-Type":"application/json",
    },
});
export default api;