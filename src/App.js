import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [ data, setData ] = useState('');
	const [ query, setQuery ] = useState('');
	const [ sponsorName, setSponsorName ] = useState('');
	const [ year, setYear ] = useState('');
	const [ season, setSeason ] = useState('');
	const [ error, setError ] = useState(false);
	const [ message, setMessage ] = useState('');

	const fetchData = async () => {
		const result = await fetch('http://localhost:8084/athlete');
		const athletes = await result.json();
		return setData(athletes);
	};
	useEffect(() => {
		fetchData();
	}, []);

	const searchResults = (e) => {
		setQuery(e.target.value);
		console.log(query, 'Whatever');
	};

	const postData = () => {
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

    setSponsorName("")
    setYear("")
    setSeason("")
	};

	const handleSearch = () => {
		const filteredAthletes = data.filter((item) => item.teamTeamName === query);
		console.log(filteredAthletes, 'filtered Athletes');
		setData(filteredAthletes);
		setQuery('');
	};

	console.log(data, 'einai ta data mas');
	return (
		<div className="App">
			<h3>Hello world!</h3>
			<input type="text" onChange={searchResults} placeholder="Search By Team" />
			<button onClick={handleSearch}>search</button>
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
				<input type="text" onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
				<input type="text" onChange={(e) => setSeason(e.target.value)} placeholder="Season" required />
				<button onClick={postData}>Send Request</button>
			</form>
		</div>
	);
}

export default App;
