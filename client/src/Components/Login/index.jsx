import { useState } from "react";
import * as authService from "../../api/auth.service";
import './index.css';
import Ducky from './logo/ducky.png'

const LoginPage = ({checkUserActive}) => {

    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.signin(username, password).then(() => {
			{
				checkUserActive();
			}
			setUsername = "";
			setPassword = "";
		});
	};

    return (
        <div class="container login four columns offset-by-four">


            <div class="row one">

                <div class="columns twelve">
                    <img src={ Ducky } class="logo" alt="a rubber duck"/>
                    <h2 class="title">Quackapp</h2>
                    <h6 class="subheading">The Message Board for Dev Students</h6>
                    <form> 
                        <h5>Log In</h5>
                        <h6>Username</h6>
                        <input 
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            name="username"
                            class="username" 
                            placeholder="Username">
                        </input>
                        <h6>Password</h6>
                        <input 
                            class="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="text"
                            name="password"
                            placeholder="password"
                        ></input>
                        <br />
                            <button class="button-primary signupbtn">Sign Up</button>
                            <button 
                            class="button-secondary loginbtn"
                            onClick={handleSubmit}
                            >Log In</button>
                    </form>

                </div>

            </div>

        </div>
    )
}


export default LoginPage