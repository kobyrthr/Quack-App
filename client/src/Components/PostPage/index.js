import Posts from './Posts'
import PostForm from './PostForm';
import * as postService from '../../api/posts.service';
import * as authService from '../../api/auth.service';

import { useReducer,useEffect } from 'react';


const reducer = (prevState, action) => {
	switch(action.type) {
		case "setPosts":
			return {...prevState, posts: action.payload};
		case "setIsLoggedIn":
			return {...prevState, isLoggedIn: action.payload};
		default: 
			return prevState
	}
}

const initialState = {
	isLoggedIn: false,
	posts: []
}

function PostPage (){

    const [state, dispatch] = useReducer(reducer, initialState);
	const { posts, isLoggedIn } = state;

    const fetchPosts = async ()=>{
        await postService.getAllPosts()
        .then((res)=>{
            dispatch({ type: "setPosts", payload: res.data.data.reverse() })
        })
        
        }
    const checkLogin = () => {
            if(authService.currentUser()) {
                dispatch({type: "setIsLoggedIn", payload: true})
            }else {
                dispatch({type: "setIsLoggedIn", payload: false})
            }
        }
    

        useEffect(() => {
            fetchPosts();
            checkLogin();
        }, []);


        if (isLoggedIn) {

            fetchPosts()
            return (
                <div className="container">
                    <PostForm/>
                    {posts.map( (post)=>{
                        return(
        
                            <Posts
                                content={post.content}
                                author={post.profile}
                                date={post.date}
                            />
                        )
                    }
        
                    )}
                </div>
                  );
        }



}

export default PostPage 