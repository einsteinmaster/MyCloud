import React, { useState } from 'react'
import './App.css';

const Outside = ({ onLogin }) => {
	const [code, setCode] = useState("");

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			openInNewTab('/getFileByCode.php?code=' + code);
		}
	}

	const onTextChange = (e) => {
		setCode(e.target.value);
	}

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<div className="OutsideView">
			<div className="TopMenu">
				<div className="MenuButton">
				</div>
				<div className="Spacer">
				</div>
				<div className="MenuButton">
					<button type="button" onClick={onLogin}>Login</button>
				</div>
			</div>
			<div className="MainBox">
				<div className="CodeBox">
					<label className="CodeInputLabel">Access Code:</label>
					<input type="text" value={code} className="CodeInput" onKeyDown={onEnter} onChange={onTextChange}></input>
				</div>
			</div>
		</div>
	);
}

export default Outside;