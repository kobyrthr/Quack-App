import { useState } from "react";
import {func} from 'prop-types'
import * as postService from '../../../api/posts.service'

function PostForm({getPostsAgain}) {
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
		let newPost = { content };
		let res = await postService.createPost(newPost).then(() => {
			setContent("");
			getPostsAgain();
			console.log(newPost);
		});

		if (!res === 201) {
			alert(`There was an error. Status is: ${res.status}`);
		}
    }

    return ( 
        <div class="container">

            <div class="row">

            <div class="columns 12">

                <form>
                    <input 
                    className="postForm" 
                    onChange = {(e)=> setContent(e.target.value)}
                    value={content}
                    type="text"
                    name="content"
                    placeholder="Send off a quick post..."
                    ></input>
                    <button onClick={handleSubmit} className="button-secondary">Send</button>
                </form>

            </div>
            </div>
        </div>
   );
}


PostForm.propTypes = {
	getPostsAgain: func,
};

export default PostForm