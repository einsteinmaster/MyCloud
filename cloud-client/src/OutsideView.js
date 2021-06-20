import React, {useState} from 'react'
import './OutsideView.css';

const OutsideView = ({ onLogin }) => {
	const [code,setCode] = useState("");

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			openInNewTab('/upload/getFileByCode.php?code='+code);
		}
	}

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<div className="OutsideView">
			<div className="TopMenu">
				<div className="Spacer">
				</div>
				<div className="LoginButton">
					<button type="button" onClick={onLogin}>Login</button>
				</div>
			</div>
			<div className="CodeBox">
				<label className="CodeInputLabel">Access Code:</label>
				<input type="text" value={code} className="CodeInput" onKeyDown={onEnter} onChange={(e)=>setCode(e.value)}></input>
			</div>
		</div>
	);
}

export default OutsideView;