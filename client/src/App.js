import './App.css';

function App() {
  return (
    <div class="container">

<div class="row">

                
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<p><b>Bolded text</b></p>
<p>Regular text</p>
<button>I'm a primary button</button><br></br>
<button class="button-secondary">I'm a secondary button</button>

</div>


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

export default App;
