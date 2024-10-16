import React, { useState } from "react";

/**
 * @name useField
 * @description Hook that works with form fields to set/track the form fields value.
 * @function
 * @constant
 * @returns {Object} Object containing the form field type, its value, and onChange handler.
 */
const useField = (type) => {
	// Initializing the state of the value to an empty string
	const [value, setValue] = useState("");

	// onChange handling function for when the field receives an input
	const onChange = (event) => {
		setValue(event.target.value);
	};

	// Returning the field type, value, and onChange handler
	return {
		type,
		value,
		onChange,
	};
};

export default useField;
