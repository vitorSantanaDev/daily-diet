import { useState } from "react";

export function useErros() {
	const [errors, setErrors] = useState<{ field: string; message: string }[]>(
		[]
	);

	function setError({ field, message }: { field: string; message: string }) {
		const errorAlreadyExists = errors.find((error) => error.field === field);

		if (errorAlreadyExists) return;

		setErrors((prevState) => [...prevState, { field, message }]);
	}

	function removeError(fieldName: string) {
		setErrors((prevState) =>
			prevState.filter((err) => err.field !== fieldName)
		);
	}

	function getErrorMessageByFieldName(fieldName: string) {
		return errors.find((error) => error.field === fieldName)?.message;
	}

	return { errors, setError, removeError, getErrorMessageByFieldName };
}
