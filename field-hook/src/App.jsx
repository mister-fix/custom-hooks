import React from "react";
import useField from "./hooks/useField";

const App = () => {
	const name = useField("text");
	const born = useField("date");
	const height = useField("number");

	return (
		<div>
			<form>
				name:
				<input {...name} />
				<br />
				birth date:
				<input {...born} />
				<br />
				height:
				<input
					{...height}
					step="0.1"
				/>
			</form>

			<div style={{ marginTop: "20px" }}>
				name: {name.value} <br />
				born: {born.value} <br />
				height: {height.value} ft
			</div>
		</div>
	);
};

export default App;
