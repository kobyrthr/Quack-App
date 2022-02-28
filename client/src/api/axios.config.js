import axios from "axios";

cosnt backendAPI = "";

const clientAPIs = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "content-type": "application/json",
    },
})

export default clientAPIs;