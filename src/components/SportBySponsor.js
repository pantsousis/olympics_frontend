import React from 'react';
import { useEffect, useState } from 'react';
import SportByStadium from './SportByStadium';

function SportBySponsor() {
	const [ data3, setData3 ] = useState('');
	const [ sponsor, setSponsor ] = useState('');
	const [ year, setYear ] = useState('');
	const [ season, setSeason ] = useState('');
	const [ error, setError ] = useState(false);
	const [ message, setMessage ] = useState('');
	const baseUrl = 'http://localhost:8084';

	function isValidYear(yearString) {
		return /\b\d{4}\b/g.test(yearString);
	}

	function isValidSeason(seasonString) {
		if (seasonString.toLowerCase() === 'summer' || seasonString.toLowerCase() === 'winter') return true;
	}

	const postDataSponsor = () => {
		setData3('');
		setError(false);
		if (!year || !season || !sponsor) {
			setError(true);
			setMessage('Please fill all the fields');
		} else if (!isValidYear(year)) {
			setError(true);
			setMessage('Year format should be yyyy');
		} else if (!isValidSeason(season)) {
			setError(true);
			setMessage('Season can either be summer or winter');
		} else {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ sponsor, year, season })
			};
			fetch(baseUrl + '/sport/search-by-sponsor/', requestOptions)
				.then((response) => response.json())
				.then((data3) => setData3(data3));
		}
	};

	return (
		<div>
			<h5>Search Sport by Sponsor, Olympics Year and Olympics Season</h5>
			<div class="container">
				<form>
					<div class="form-group">
						<label for="sponsorName">Sponsor Name</label>
						<input
							type="text"
							class="form-control"
							id="sponsorName"
							aria-describedby="emailHelp"
							placeholder="Sponsor Name"
							onChange={(e) => setSponsor(e.target.value)}
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							Try "Abibas"
						</small>
					</div>
					<div class="form-group">
						<label for="Year">Olympics Year</label>
						<input
							type="text"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Olympics Year"
							onChange={(e) => setYear(e.target.value)}
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							Try "2000"
						</small>
					</div>
					<div class="form-group">
						<label for="Season">Olympics Season</label>
						<input
							type="text"
							class="form-control"
							id="Season"
							placeholder="Olympics Season"
							onChange={(e) => setSeason(e.target.value)}
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							Try "Summer"
						</small>
					</div>
					<button type="button" class="btn btn-primary" onClick={postDataSponsor}>
						Submit
					</button>
				</form>
				<ul class="list-group">
					{data3 && data3.map((item) => <li class="list-group-item">Sport: {item}</li>)}
					{error && <div style={{ color: 'red' }}>{message}</div>}
				</ul>
			</div>  
		</div>
	);
}

export default SportBySponsor;
