function Posts(props) {
  return (
<div class="container">

  {/* THE POST FORM GOES HERE */}

    <div class="row">

        <div class="columns twelve post-card">
            <div class="profile-img"></div>
            <div class="post-content">

                <p><b>AUTHOR <span>on</span> DATE</b></p>
                <p>{props.content}</p>

                <div class="post-action-bar">

                    <div class="post-action">
                        4<img src="assets/Speech Bubble.png" alt=""></img>
                    </div>

                    <div class="post-action">
                        10<img src="assets/upvote button.png" alt=""></img>

                    </div>

                    <form action="/?_method=DELETE" method="POST">
                        <input type="submit" value="Delete"></input>
                    </form>

                </div>

                
            </div>
            
        </div>
    </div>
</div>
  );
}

export default Posts;
