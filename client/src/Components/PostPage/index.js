import Posts from './Posts'
import PostForm from './PostForm';
import * as postService from '../../api/posts.service';


const fetchPosts = async ()=>{
await postService.getAllPosts().then((res)=>{
    console.log(res.data.data)
}

)
}

function PostPage (){

    fetchPosts()
    return (
        <div className="container">
            <PostForm/>
            <Posts/>
        </div>
          );
}

export default PostPage 