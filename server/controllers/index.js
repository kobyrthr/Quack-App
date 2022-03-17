
const {signUp, logIn, userBoard} = require("./auth");
const {profileInfo, userPosts, postComments, updatePost, destroyPost} = require("./profilePage");


module.exports = {
    signUp,
	logIn,
    userBoard,
    profileInfo, 
    userPosts, 
    postComments, 
    updatePost, 
    destroyPost
}