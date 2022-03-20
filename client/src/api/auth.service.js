import clientAPIs from "./axios.config.js";

const auth = "/auth";
const users = "/users";

const signup = (email, password) => {
    return clientAPIs
        .post(`${auth}/signup`, {email, password})
        .then((res) => {
            console.log(res)
        })

}

const signin = (email, password) => {
    console.log("before try in login")
    try {  
        return clientAPIs
            .post(`${auth}/signin`, {email, password})
            .then((res) => {
                console.log(res)
                if (res.data.token) {
                    localStorage.setItem("user", JSON.stringify(res.data.token))
                }
                return res.data.token;
            })
    } catch (err) {
        console.log(err)
    }
}


const currentUser = () => {
    let user = localStorage.getItem("user");
    return JSON.parse(user)
}

const getProfile = () => {
    return clientAPIs.get(`${users}/profile`)
}

const logout = () => {
    localStorage.removeItem("user")
}

export {signup, signin, currentUser, getProfile, logout}