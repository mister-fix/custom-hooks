import React from "react";

const App = () => {
	const name = "";
	const birthdate = "";
	const height = "";

	return (
		<div>
			<form>
				name:
				<input type="text" />
				<br />
				birth date:
				<input type="date" />
				<br />
				height:
				<input type="number" />
			</form>

			<div>
				{name} {birthdate} {height}
			</div>
		</div>
	);
};

export default App;
