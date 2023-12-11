export enum ETypeOfMeal {
	MEAL_WITHIN_THE_DIET = "MEAL_WITHIN_THE_DIET",
	MEAL_OUTSIDE_THE_DIET = "MEAL_OUTSIDE_THE_DIET",
}

export interface ISnack {
	time: string;
	createdAt: string;
	name: string;
	type: ETypeOfMeal;
	ID: string;
}
