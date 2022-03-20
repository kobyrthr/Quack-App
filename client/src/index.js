import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './normalize.css'
import './skeleton.css'
import './index.css'
import Posts from './Components/PostPage/Posts'
import PostForm from './Components/PostPage/PostForm';
import EditProfilePage from './Pages/EditProfile';


ReactDOM.render(
  <React.StrictMode>
  {/* <div class="row">

                    
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<p><b>Bolded text</b></p>
<p>Regular text</p>
<button>I'm a primary button</button><br></br>
<button class="button-secondary">I'm a secondary button</button>

</div> */}

{/* added new components */}
    {/* <PostForm/>
    <Posts /> */}
    {/* <LoginPage /> */}
    <BrowserRouter>
    <EditProfilePage />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

