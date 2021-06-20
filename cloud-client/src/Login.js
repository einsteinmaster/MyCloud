import Cookies from 'js-cookie';
import React, {useState} from 'react'
import './App.css'
import base64 from 'base-64';

const Login = ({ onBack , onLoginOk}) => {
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");

	const onLogin = () => {
		let hash = base64.encode(username + ":" + password)

		let headers = new Headers();

		headers.set('Authorization', 'Basic ' + hash);
		headers.append('pragma', 'no-cache');
		headers.append('cache-control', 'no-cache');

		fetch(
			'/upload/test.txt',
			{
				method: 'GET',
				headers: headers
			}
		)
			.then((result) => {
				if(result.status === 200){
					console.log('Success:', result);
					Cookies.set('cookie',hash);
					onLoginOk();
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	return (
		<div className="Login">
			<div className="TopMenu">
				<div className="MenuButton">
				</div>
				<div className="Spacer">
				</div>
				<div className="MenuButton">
					<button type="button" onClick={onBack}>Back</button>
				</div>
			</div>
			<div className="MainBox">
				<div className="Username">
					<label className="CodeInputLabel">Username:</label>
					<input value={username} type="text" className="CodeInput" onChange={(e)=>setUsername(e.target.value)}></input>
				</div>
				<div className="Password">
					<label className="CodeInputLabel">Password: </label>
					<input value={password} type="password" className="CodeInput" onChange={(e)=>setPassword(e.target.value)}></input>
				</div>
				<button className="LoginButton" onClick={onLogin}>Ok</button>
			</div>
		</div>
	)
}

export default Login;


