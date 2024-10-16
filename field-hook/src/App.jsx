import React from "react";
import useField from "./hooks/useField";

const App = () => {
	const name = useField("text");
	const birthdate = useField("date");
	const height = useField("number");

	return (
		<div>
			<form>
				name:
				<input
					type="text"
					value={name.value}
					onChange={name.onChange}
				/>
				<br />
				birth date:
				<input
					type="date"
					value={birthdate.value}
					onChange={birthdate.onChange}
				/>
				<br />
				height:
				<input
					type="number"
					value={height.value}
					onChange={height.onChange}
				/>
			</form>

			<div style={{ marginTop: "20px" }}>
				name: {name.value} <br />
				birthdate: {birthdate.value} <br />
				height: {height.value} ft
			</div>
		</div>
	);
};

export default App;
