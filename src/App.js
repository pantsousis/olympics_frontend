import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState('');
	const [query, setQuery] = useState('');
	const [sponsorName, setSponsorName] = useState('');
	const [year, setYear] = useState('');
	const [season, setSeason] = useState('');
	const [team, setTeam] = useState('');
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	const [stadium, setStadium] = useState('');
	const [date, setDate] = useState('');
	const [url, setUrl] = useState('');
	const baseUrl = 'http://localhost:8084';

	const postDataSponsor = () => {
		if (!year || !season || !sponsorName) {
			setError(true);
			setMessage('Please fill all the fields');
		}
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ sponsorName, year, season })
		};
		fetch('https://reqres.in/api/posts', requestOptions)
			.then((response) => response.json())
			.then((data) => setData(data));

		setSponsorName('');
		setYear('');
		setSeason('');
	};

	const postDataAthlete = () => {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
			// body: JSON.stringify({ sponsorName, year, season })
		};
		fetch(baseUrl + '/athlete/' + team, requestOptions)
			.then((response) => response.json())
			.then((data) => setData(data));
	};

	const postDataSportAtStadium = () => {
		if (!date || !stadium ) {
			setError(true);
			setMessage('Please fill all the fields');
		}
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			//body: JSON.stringify({ stadium, date})
		};
		fetch(baseUrl + '/sport/search' , requestOptions)
			.then((response) => response.json())
			.then((data) => setData(data));
			console.log(data,"TELOS EDW")
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
					onChange={(e) => setSponsorName(e.target.value)}
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
				<button onClick={postDataSponsor}>Send Request</button>
			</form>

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
				<button onClick={postDataSportAtStadium}>Search for Sports</button>
			</form>
			{data &&
				data.map((item) => (
					<div >
						<div>
							{item.sportName} {item.stadiumName}
						</div>
					</div>
				))}
		</div>
	);
}

export default App;
