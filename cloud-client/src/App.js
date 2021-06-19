import './App.css';
import './OutsideView';
import Login from './Login';
import {useState} from 'react';
import OutsideView from './OutsideView';
import Inside from './Inside';

const App = () => {
	const [view, setView] = useState("outside");

	const renderView = () => {
		switch (view) {
			default:
			case "outside":
				return <OutsideView onLogin={()=>setView("login")}/>
			case "login":
				return <Login onBack={()=>setView("outside")} onLoginOk={()=>setView("inside")}/>
			case "inside":
				return <Inside onLogout={()=>setView("outside")}/>
		}
	}

	return (
		<div className="App" >
			{renderView()}
		</div>
	);
}

export default App;