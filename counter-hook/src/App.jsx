import React from "react";
import useCounter from "./hooks/useCounter";

const App = () => {
	const counter = useCounter();

	return (
		<div>
			<div>{counter.value}</div>
			<button onClick={counter.increase}>plus</button>
			<button onClick={counter.decrease}>minus</button>
			<button onClick={counter.zero}>zero</button>
		</div>
	);
};

export default App;
