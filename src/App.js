import './App.css';
import React from 'react';
import AthleteByTeam from './components/AthleteByTeam';
import SportByStadium from './components/SportByStadium';
import SportBySponsor from './components/SportBySponsor';
import 'bootstrap/dist/css/bootstrap.css';

// import Paper from "@material-ui/core/Paper";
// import Tab from "@material-ui/core/Tab";
// import Tabs from "@material-ui/core/Tabs";

function App() {
	return (
		<div className="App">
			<div class="row">
				<div class="col-sm" />
				<div class="col-sm">
					<img src="https://logos-world.net/wp-content/uploads/2021/09/Olympics-Logo-2010-present.png" class="img-fluid" alt="Responsive image" />
					<h1 class="border-bottom border-secondary">Olympics App</h1>
				</div>
				<div class="col-sm" />
			</div>
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
			{/* <AthleteByTeam />
			<SportByStadium />
			<SportBySponsor /> */}

			{/* <div
				style={{
					marginLeft: "5%",
				}}
			>
				<h2>Here are some tabs</h2>
				<Paper square elevation={24} >
					<Tabs
						value={value}
						textColor="primary"
						indicatorColor="primary"
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					>
						<Tab label="Active TAB One" />
						<Tab label="Active TAB Two" />
						<Tab label="Disabled TAB!" disabled />
						<Tab label="Active Tab Three" />
					</Tabs>
					<h3>TAB NO: {value} clicked!</h3>
				</Paper>
			</div> */}
		</div>
	);
}

export default App;
