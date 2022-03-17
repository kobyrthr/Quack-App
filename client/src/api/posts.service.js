import clientAPIs from "./axios.config.js";

const profilePage = "/profilepage";

const getProfile = () =>{
    return clientAPIs.get(`${profilePage}`)
}
const getPosts = (id) =>{
    return clientAPIs.get(`${profilePage}/${id}`);
}
const getPostComments = (id) =>{
    return clientAPIs.get(`${profilePage}/${id}/comments`);
}
const updatePost = (id, data) =>{
    return clientAPIs.put(`${profilePage}/${id}`, data);
}
const destroyPost = (id) =>{
    return clientAPIs.delete(`${profilePage}/${id}`);
}

export {getProfile, getPosts, getPostComments, updatedPost, destroyPost}