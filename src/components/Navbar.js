import React from 'react';

function Navbar() {
	return (
		<div>
			<nav
				class="navbar navbar-light bg-light"
				style={{
					marginLeft: '1%'
				}}
			>
				<form class="form-inline">
					<div class="input-group">
						<div class="input-group-prepend" style={{
					marginRight: '1%',
                    marginTop: '0.5%'
				}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								class="bi bi-person-circle"
								viewBox="0 0 16 16"
							>
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
								<path
									fill-rule="evenodd"
									d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
								/>
							</svg>
						</div>
						<input
							type="text"
							class="form-control"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
						<input
							type="password"
							class="form-control"
							placeholder="Password"
							aria-label="Password"
							aria-describedby="basic-addon1"
						/>
						<button type="button" class="btn btn-success">
							Login
						</button>
					</div>
				</form>
			</nav>

			{/* <nav class="navbar navbar-light bg-light">
				<form class="form-inline">
					<input class="form-control mr-sm-2" type="search" placeholder="P1" aria-label="Username" style={{
					marginLeft: "720%",
				    }} />
				</form>  
                <form class="form-inline">
					<input class="form-control mr-sm-2" type="search" placeholder="P2" aria-label="Password" style={{
					marginLeft: "190%",
				    }} />
				</form>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{
					marginRight: "2%",
				}}>
						Search
				</button>  
			</nav> */}
		</div>
	);
}

export default Navbar;
