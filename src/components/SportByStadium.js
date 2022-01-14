import React from 'react';
import { useEffect, useState } from 'react';

function SportByStadium() {
	const [ data2, setData2 ] = useState('');
	const [ error, setError ] = useState(false);
	const [ message, setMessage ] = useState('');
	const [ stadium, setStadium ] = useState('');
	const [ date, setDate ] = useState('');
	const baseUrl = 'http://localhost:8084';

	function isValidDate(dateString) {
		// First check for the pattern
		var regEx = /^\d{4}-\d{2}-\d{2}$/;
		if (!dateString.match(regEx)) return false;

		// Parse the date parts to integers
		var parts = dateString.split('-');
		var day = parseInt(parts[2], 10);
		var month = parseInt(parts[1], 10);
		var year = parseInt(parts[0], 10);

		// Check the ranges of month and year
		if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

		var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

		// Adjust for leap years
		if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

		// Check the range of the day
		return day > 0 && day <= monthLength[month - 1];
	}

	const postDataSportAtStadium = () => {
		setData2('');
		setError(false);
		if (!date || !stadium) {
			setError(true);
			setMessage('Please fill all the fields');
		} else if (!isValidDate(date)) {
			setError(true);
			setMessage('Date format should be yyyy-mm-dd');
		} else {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ stadium, date })
			};
			console.log(requestOptions, 'pogchamp edw');
			fetch(baseUrl + '/sport/search/', requestOptions)
				.then((response) => response.json())
				.then((data2) => setData2(data2));
		}
		// console.log(data,'hello')
	};

	return (
		<div>
			<div>
			<h5>Search Sport by Stadium and Date</h5>
			<div class="container">
				<form>
					<div class="form-group">
						<label for="Stadium">Sponsor Name</label>
						<input
							type="text"
							class="form-control"
							id="Stadium"
							aria-describedby="emailHelp"
							placeholder="Stadium"
							onChange={(e) => setStadium(e.target.value)}
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							Try "Toumpa"
						</small>
					</div>
					<div class="form-group">
						<label for="Date">Sport Date</label>
						<input
							type="text"
							class="form-control"
							id="Date"
							placeholder="Sport Date"
							onChange={(e) => setDate(e.target.value)}
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							Try "2000-06-06"
						</small>
					</div>
					<button type="button" class="btn btn-primary" onClick={postDataSportAtStadium}>
						Submit
					</button>
				</form>
				<ul class="list-group">
					{data2 && data2.map((item) => <li class="list-group-item">Sport: {item.sportName} - Stadium: {item.stadiumName}</li>)}
					{error && <div style={{ color: 'red' }}>{message}</div>}
				</ul>
			</div>  
		</div>


			{/* <h5>Search Sport by Stadium and Date</h5>
			<form>
				<input type="text" onChange={(e) => setStadium(e.target.value)} placeholder="Stadium" required />
				<input type="text" onChange={(e) => setDate(e.target.value)} placeholder="Date (yyyy-mm-dd)" required />
			</form>
			<button type="button" onClick={postDataSportAtStadium}>
					Search for Sports
				</button>
			{data2 &&
				data2.map((item) => (
					<div>
						<div>
							{item.sportName} {item.stadiumName}
						</div>
					</div>
				))}
			{error && <div style={{ color: 'red' }}>{message}</div>} */}
		</div>
	);
}

export default SportByStadium;
