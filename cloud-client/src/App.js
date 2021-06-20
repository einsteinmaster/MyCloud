import './App.css';
import './OutsideView';
import Login from './Login';
import React, {useState,useEffect} from 'react';
import OutsideView from './OutsideView';
import Inside from './Inside';
import Upload from './Upload';
import Cookies from 'js-cookie';

const App = () => {
	const [view, setView] = useState("outside");

	useEffect(() => {
		if(Cookies.get('cookie') !== undefined)
		{
			setView("inside");
		}
		return () => {
			
		}
	}, [])

	const renderView = () => {
		switch (view) {
			default:
			case "outside":
				return <OutsideView onLogin={()=>setView("login")}/>
			case "login":
				return <Login onBack={()=>setView("outside")} onLoginOk={()=>setView("inside")}/>
			case "inside":
				return <Inside onLogout={()=>setView("outside")} onUpload={()=>setView("upload")}/>
			case "upload":
				return <Upload onBack={()=>setView("inside")}/>
		}
	}

	return (
		<div className="App" >
			{renderView()}
		</div>
	);
}

export default App;