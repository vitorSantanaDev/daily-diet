export function dateMask(inputString: string): string {
	const digitsOnly = inputString.replace(/\D/g, "");

	if (digitsOnly.length >= 2) {
		const day = parseInt(digitsOnly.slice(0, 2), 10);
		if (day > 31) {
			return "31";
		}
	}

	if (digitsOnly.length >= 4) {
		const month = parseInt(digitsOnly.slice(2, 4), 10);
		if (month > 12) {
			return `${digitsOnly.slice(0, 2)}/12`;
		}
	}

	if (digitsOnly.length >= 3 && digitsOnly.length < 5) {
		return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`;
	} else if (digitsOnly.length >= 5) {
		return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(
			2,
			4
		)}/${digitsOnly.slice(4, 8)}`;
	} else {
		return digitsOnly;
	}
}

export function hourMask(inputString: string): string {
	const digitsOnly = inputString.replace(/\D/g, "");

	if (digitsOnly.length >= 2) {
		const hours = parseInt(digitsOnly.slice(0, 2), 10);
		if (hours > 23) {
			return "23";
		}
	}

	if (digitsOnly.length >= 4) {
		const minutes = parseInt(digitsOnly.slice(2, 4), 10);
		if (minutes > 59) {
			return `${digitsOnly.slice(0, 2)}:59`;
		}
	}

	if (digitsOnly.length >= 3 && digitsOnly.length < 5) {
		return `${digitsOnly.slice(0, 2)}:${digitsOnly.slice(2)}`;
	} else if (digitsOnly.length >= 5) {
		return `${digitsOnly.slice(0, 2)}:${digitsOnly.slice(2, 4)}`;
	} else {
		return digitsOnly;
	}
}
