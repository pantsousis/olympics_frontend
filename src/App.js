import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

function App() {
	const [data, setData] = useState('');
	const [query, setQuery] = useState('');
	const [sponsor, setSponsor] = useState('');
	const [year, setYear] = useState('');
	const [season, setSeason] = useState('');
	const [team, setTeam] = useState('');
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	const [stadium, setStadium] = useState('');
	const [date, setDate] = useState('');
	const [url, setUrl] = useState('');
	const baseUrl = 'http://localhost:8084';

	const [value, setValue] = React.useState(2);

	const postDataAthlete = () => {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
			// body: JSON.stringify({ sponsorName, year, season })
		};
		fetch(baseUrl + '/athlete/' + team, requestOptions)
			.then((response) => response.json())
			.then((data) => setData(data));
		// console.log(data,"pog EDW")
	};

	const postDataSponsor = () => {
		if (!year || !season || !sponsor) {
			setError(true);
			setMessage('Please fill all the fields');
		}
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ sponsor, year, season })
		};
		fetch(baseUrl + '/sport/search-by-sponsor/', requestOptions)
			.then((response) => response.json())
			.then((data) => setData(data));

	};


	const postDataSportAtStadium = () => {
		console.log("MPHKAME!")
		if (!date || !stadium) {
			setError(true);
			setMessage('Please fill all the fields');
		}
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ stadium, date })
		};
		console.log(requestOptions, 'pogchamp edw')
		fetch(baseUrl + '/sport/search/', requestOptions)
			.then((response) => response.json())
			.then((data) => setData(data));
		// console.log(data,'hello')
	};



	return (
		<div className="App">

			<h3>Olympics App</h3>


			<input type="text" onChange={(e) => setTeam(e.target.value)} placeholder="Search By Team" />
			<button onClick={postDataAthlete}>search</button>
			{data &&
				data.map((item) => (
					<div key={item.athleteId}>
						<div>
							{item.athleteName} {item.teamTeamName}
						</div>
					</div>
				))}
			{error && <div style={{ color: 'red' }}>{message}</div>}



			<form>
				<input
					type="text"
					onChange={(e) => setStadium(e.target.value)}
					placeholder="Stadium"
					required
				/>
				<input
					type="text"
					onChange={(e) => setDate(e.target.value)}
					placeholder="Date"
					required
				/>
				<button type="button" onClick={postDataSportAtStadium}>Search for Sports</button>
			</form>
			{data &&
				data.map((item) => (
					<div >
						<div>
							{item.sportName} {item.stadiumName}
						</div>
					</div>
				))}



			<form>
				<input
					type="text"
					onChange={(e) => setSponsor(e.target.value)}
					placeholder="Sponsor Name"
					required
				/>
				<input
					type="text"
					onChange={(e) => setYear(e.target.value)}
					placeholder="Year"
					required
				/>
				<input
					type="text"
					onChange={(e) => setSeason(e.target.value)}
					placeholder="Season"
					required
				/>
				<button type="button" onClick={postDataSponsor}>Send Request</button>
			</form>
			{data &&
				data.map((item) => (
					<div >
						<div>
							{item}
						</div>
					</div>
				))}


			<div
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
			</div>

		</div>
	);
}

export default App;
