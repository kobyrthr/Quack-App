import { useState } from "react";
import * as authService from "../../api/auth.service";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.signup(username, password);
		setUsername("");
		setPassword("");
	}


	return (
		<div>
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

			</form>
		</div>
	);
};

export default Signup;