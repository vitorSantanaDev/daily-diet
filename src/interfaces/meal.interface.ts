export enum ETypeOfMeal {
	MEAL_WITHIN_THE_DIET = "MEAL_WITHIN_THE_DIET",
	MEAL_OUTSIDE_THE_DIET = "MEAL_OUTSIDE_THE_DIET",
}

export interface IMeal {
	time: string;
	createdAt?: string;
	name: string;
	type: ETypeOfMeal;
	description: string;
	date: string;
	ID?: string;
}
