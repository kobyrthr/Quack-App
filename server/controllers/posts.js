const posts = require('../models/Posts')

function seedPosts(req,res){
posts.insertOne([
        {
            content: req.body.content,
            
    }


])
console.log('hello')
}

module.exports = {seedPosts}