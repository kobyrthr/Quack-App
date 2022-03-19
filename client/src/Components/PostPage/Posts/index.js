function Posts(props) {
  return (
<div className="container">

  {/* THE POST FORM GOES HERE */}

    <div className="row">

        <div className="columns twelve post-card">
            <div className="profile-img"></div>
            <div className="post-content">

                <p><b>USERNAME on DATE</b></p>
                <p>{props.content}</p>

                <div className="post-action-bar">

                    <div className="post-action">
                        4<img src="assets/Speech Bubble.png" alt=""></img>
                    </div>

                    <div className="post-action">
                        10<img src="assets/upvote button.png" alt=""></img>

                    </div>

                </div>

                
            </div>
            
        </div>
    </div>
</div>
  );
}

export default Posts;
