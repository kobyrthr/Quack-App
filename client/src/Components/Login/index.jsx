import './index.css';
import Ducky from './logo/ducky.png'

const LoginPage = () => {
    return (
        <div class="container login four columns offset-by-four">


            <div class="row one">

                <div class="columns twelve">
                    <img src={ Ducky } class="logo" />
                    <h2 class="title">Quackapp</h2>
                    <h6 class="subheading">The Message Board for Dev Students</h6>
                    <form> 
                        <h5>Log In</h5>
                        <h6>Username</h6>
                        <input 
                               class="username" 
                               placeholder="Email">
                        </input>
                        <h6>Password</h6>
                        <input class="password" 
                               type="password" placeholder="Password"
                        ></input>
                        <br />
                            <button class="button-primary signupbtn">Sign Up</button>
                            <button class="button-secondary loginbtn">Log In</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default LoginPage;
