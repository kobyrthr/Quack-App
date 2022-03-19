function PostForm() {
    return ( 
        <div className="container">

            <div className="row">

            <div className="columns 12">

                <form>
                    <input className="postForm" placeholder="Send off a quick post..."></input>
                    <button className="button-secondary">Send</button>
                </form>

            </div>
            </div>
        </div>
   );
}

export default PostForm