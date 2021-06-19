import React from 'react'
import './Login.css'

const Login = ({ onBack , onLoginOk}) => {
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
					<input type="text" className="CodeInput"></input>
				</div>
				<div className="Password">
					<label className="CodeInputLabel">Password: </label>
					<input type="text" className="CodeInput"></input>
				</div>
				<button className="LoginButton" onClick={onLoginOk}>Ok</button>
			</div>
		</div>
	)
}

export default Login;


