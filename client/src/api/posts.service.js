import clientAPIs from "./axios.config.js";

const profilePage = "/profilepage";
const post = '/post'

const getAllPosts = ()=>{
    return clientAPIs.get(`${post}`)
}


const getProfile = () =>{
  return clientAPIs.get(`${profilePage}`)
}
const getPosts = (id) =>{
    return clientAPIs.get(`${profilePage}/${id}`);
}
const getPostComments = (id) =>{
    return clientAPIs.get(`${profilePage}/${id}/comments`);
}
const createPost = (data) =>{
    return clientAPIs.post(`${post}`, data)
}
const updatePost = (id, data) =>{
    return clientAPIs.put(`${profilePage}/${id}`, data);
}
const destroyPost = (id) =>{
    return clientAPIs.delete(`${profilePage}/${id}`);
}

export {createPost,getAllPosts,getProfile, getPosts, getPostComments, destroyPost}