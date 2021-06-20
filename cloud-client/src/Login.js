import Cookies from 'js-cookie';
import React from 'react'
import './Login.css'
import base64 from 'base-64';

const Login = ({ onBack , onLoginOk}) => {
	let userRef = React.useRef(null);
	let pwRef = React.useRef(null);
	const onLogin = () => {
		const username = userRef.current.value;
		const password = pwRef.current.value;
		let hash = base64.encode(username + ":" + password)

		let headers = new Headers();

		headers.set('Authorization', 'Basic ' + hash);

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
				<div className="Spacer">
				</div>
				<div className="BackButton">
					<button type="button" onClick={onBack}>Back</button>
				</div>
			</div>
			<div className="LoginBox">
				<div className="Username">
					<label className="CodeInputLabel">Username:</label>
					<input ref={userRef} type="text" className="CodeInput"></input>
				</div>
				<div className="Password">
					<label className="CodeInputLabel">Password: </label>
					<input ref={pwRef} type="text" className="CodeInput"></input>
				</div>
				<button className="LoginButton" onClick={onLogin}>Ok</button>
			</div>
		</div>
	)
}

export default Login;


