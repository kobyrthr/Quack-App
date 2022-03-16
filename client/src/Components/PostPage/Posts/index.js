function Posts() {
  return (
<div class="container">

  {/* THE POST FORM GOES HERE */}

    <div class="row">

        <div class="columns twelve post-card">
            <div class="profile-img"></div>
            <div class="post-content">

                <p><b>USERNAME on DATE</b></p>
                <p>Hey y'all. It's been a while. Can we do an update thread? What's new in your world?</p>

                <div class="post-action-bar">

                    <div class="post-action">
                        4<img src="assets/Speech Bubble.png" alt=""></img>
                    </div>

                    <div class="post-action">
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
