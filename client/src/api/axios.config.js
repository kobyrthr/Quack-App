import axios from "axios";

const backendAPI = "http://localhost:4000/api";
//will be changed to this for Heroku https://quack-application.herokuapp.com/api

const clientAPIs = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "content-type": "application/json",
    },
})

export default clientAPIs;