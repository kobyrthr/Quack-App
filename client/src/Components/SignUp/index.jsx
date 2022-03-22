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
			<form
			style={{
				// display:'flex',
				flexDirection:'column',
				maxWidth:'400px',
				backgroundColor:'#393d47',
				padding:'70px',
				margin:'0 auto'

				}}
			 >
				<label htmlFor="username">
                    
					<input
						
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						type="text"
						name="username"
						placeholder="username"
					/>
				</label>
				<label htmlFor="password">
                    
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