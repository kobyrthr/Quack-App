const Posts = require('../models')

async function index(req,res){
    res.send('Post Page here!'),
    await Posts.create({
        content: "Hi, I'm a post!"
    }),
    function (err) {
        if (err) return handleError(err)
        else console.log(Posts)
    }
}
function logPost(req,res){
    // console.log(post)

}

module.exports = {
    index,
    logPost
}