import './index.css';
import Ducky from './logo/ducky.png'

export default function LoginPage() {
    return (
        <div class="container login">


            <div class="row one">

                <div class="columns four">
                    <img src={ Ducky } />
                    <h2>Quackapp</h2>
                    <h6>The Message Board for Dev Students</h6>
                    <form> 
                        <h3>Log In</h3>
                        <h6>Username</h6>
                        <input class="username" placeholder="Email"></input>
                        <h6>Password</h6>
                        <input class="password" placeholder="Password"></input>
                        <br />
                            <button class="button-primary signupbtn">Sign Up</button>
                            <button class="button-secondary loginbtn">Log In</button>
                    </form>

                </div>

            </div>

        </div>
    )
}


