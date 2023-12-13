import { useNavigation, useRoute } from "@react-navigation/native";

import {
	MealFormTemplate,
	RegisterMealType,
} from "@templates/MealFormTemplate";

import { useMeals } from "@storage/meals/useMeals";
import { ETypeOfMeal, IMeal } from "@interfaces/meal.interface";

export function EditMeal() {
	const { mealUpdate } = useMeals();
	const navigation = useNavigation();

	const route = useRoute();

	const { meal: mealRouteParam } = route.params as { meal: IMeal };

	async function handleSubmit(meal: RegisterMealType) {
		await mealUpdate({
			date: meal.date,
			name: meal.name,
			time: meal.hour,
			ID: String(mealRouteParam.ID),
			type: meal.mealType,
			description: meal.description,
		});
		navigation.navigate("new_meal_feedback", { type: meal.mealType });
	}

	return (
		<>
			<MealFormTemplate
				defautlValues={{
					name: mealRouteParam.name,
					description: mealRouteParam.description,
					date: mealRouteParam.date,
					hour: mealRouteParam.time,
					mealType:
						mealRouteParam.type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
							? "NO"
							: "YES",
				}}
				title="Editar Refeição"
				buttonSubmitLabel="Salvar Alterações"
				onSubmit={(data) => handleSubmit(data)}
			/>
		</>
	);
}
