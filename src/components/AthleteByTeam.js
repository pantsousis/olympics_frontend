import React from 'react';
import { useEffect, useState } from 'react';

function AthleteByTeam() {
	const [ data1, setData1 ] = useState('');
	const [ team, setTeam ] = useState('');
	const baseUrl = 'http://localhost:8084';
	const [ error, setError ] = useState(false);
	const [ message, setMessage ] = useState('');

	const postDataAthlete = () => {
		setData1('');
		setError(false);
		if (!team) {
			setError(true);
			setMessage('Please fill all the fields');
		}

		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
			// body: JSON.stringify({ sponsorName, year, season })
		};
		fetch(baseUrl + '/athlete/' + team, requestOptions)
			.then((response) => response.json())
			.then((data1) => setData1(data1));
		// console.log(data,"pog EDW")
	};

	return (
		<div>
			<div>
				<h5>Search Athletes by teams</h5>
				<div class="container">
					<form>
						<div class="form-group">
							<label for="Team">Team Name</label>
							<input
								type="text"
								class="form-control"
								id="Team"
								aria-describedby="emailHelp"
								placeholder="Team Name"
								onChange={(e) => setTeam(e.target.value)}
								required
							/>
							<small id="emailHelp" class="form-text text-muted">
								Try "Greece"
							</small>
						</div>
						<button type="button" class="btn btn-primary" onClick={postDataAthlete}>
							Submit
						</button>
					</form>
					<ul class="list-group">
						{data1 &&
							data1.map((item) => <li class="list-group-item">Athlete Name: {item.athleteName}</li>)}
						{error && <div style={{ color: 'red' }}>{message}</div>}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AthleteByTeam;
