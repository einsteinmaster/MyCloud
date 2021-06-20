import './App.css';
import Login from './Login';
import React, {useState,useEffect} from 'react';
import Outside from './Outside';
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
				return <Outside onLogin={()=>setView("login")}/>
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
			<div className="InfoBox">
				<p>
					Carlos Alvarez Fritz <br/>
					CEO
				</p>
				<p>
					ALVAREZ CAPITAL PARTNERS S.a.r.l <br/>
					19 Rue de Bitbourg <br/>
					L-1273 Luxemburg
				</p>
				<p>
					Registre de Commerce et des Société Nr. B 157.978 <br/>
					Luxembourg
				</p>
				<p>
					Contact: <br/>
					<br/>
					Email: 
					alvarez.capital.partners(at)email.de
				</p>
			</div>
		</div>
	);
}

export default App;