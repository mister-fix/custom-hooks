import React from "react";

const App = () => {
	return (
		<div>
			<div>0</div>
			<button onClick={() => console.log("plus")}>plus</button>
			<button onClick={() => console.log("minus")}>minus</button>
			<button onClick={() => console.log("zero")}>zero</button>
		</div>
	);
};

export default App;
