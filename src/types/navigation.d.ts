import { ETypeOfMeal, IMeal } from "@interfaces/snack.interface";

export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			statistics: undefined;
			create_new_meal: undefined;
			new_meal_feedback: { type: ETypeOfMeal };
			meal_details: { meal: IMeal };
			edit_meal: { meal: IMeal };
		}
	}
}
