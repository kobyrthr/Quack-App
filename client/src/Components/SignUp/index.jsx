import { useState } from "react";
import * as authService from "../../api/auth.service";
import './index.css';

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.signup(username, password);
		setUsername("");
		setPassword("");
		setSuccessMsg("SUCCESS YAY!");
	};

	return (
		<div>
		 <div class="container login four columns offset-by-four">

			<div class="row one">

			<form >
				<label htmlFor="username">
                    Username
					<input
						
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						type="text"
						name="username"
						placeholder="username"
					/>
				</label>
				<label htmlFor="password">
                    Password
					<input
					
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="text"
						name="password"
						placeholder="new password"
					/>
				</label>
				<button onClick={handleSubmit}>
					Signup
				</button>
				<h1 style={{ color: "green" }}>{successMsg}</h1>
			</form>

			</div>

		 </div>


			
		</div>
	);
};

export default Signup;