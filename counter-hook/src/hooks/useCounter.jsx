import React, { useState } from "react";

/**
 * @name useCounter
 * @function
 * @description Custom hook that stores a numeric value which can be incremented, decremented, or reset to 0.
 * @constant
 * @returns {Object} Object that contains the counter value and functions to manipulate the value.
 */
const useCounter = () => {
	// Initializing the state of the value to 0
	const [value, setValue] = useState(0);

	// Function to increase the value by 1
	const increase = () => {
		setValue((prev) => prev + 1);
	};

	// Function to decrease the value by 1
	const decrease = () => {
		setValue((prev) => prev - 1);
	};

	// Function to reset the value to 0
	const zero = () => {
		setValue(0);
	};

	// Returning value, increase, decrease, and reset functions
	return {
		value,
		increase,
		decrease,
		zero,
	};
};

export default useCounter;
