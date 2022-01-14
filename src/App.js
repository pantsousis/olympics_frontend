import './App.css';
import React from 'react';
import AthleteByTeam from './components/AthleteByTeam';
import SportByStadium from './components/SportByStadium';
import SportBySponsor from './components/SportBySponsor';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<div className="App" style={{
			width: '99%'
		}}>
			<Navbar />
			<Logo />
			<div class="row">
				<div class="col-sm">
					<AthleteByTeam />
				</div>
				<div class="col-sm">
					<SportByStadium />
				</div>
				<div class="col-sm">
					<SportBySponsor />
				</div>
			</div>
		</div>
	);
}

export default App;
