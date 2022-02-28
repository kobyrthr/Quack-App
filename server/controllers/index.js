
const {signUp,
	logIn,
    userBoard,} = require("./auth");
const {profileInfos, userPosts, postComments, updatePost, destroyPost,} = require("./profilePage");

module.exports = {
    signUp,
	logIn,
    userBoard,
    profileInfos, 
    userPosts, 
    postComments, 
    updatePost, 
    destroyPost
}