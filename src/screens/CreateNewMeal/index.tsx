import { useNavigation } from "@react-navigation/native";

import {
	MealFormTemplate,
	RegisterMealType,
} from "@templates/MealFormTemplate";

import { useMeals } from "@storage/meals/useMeals";
import { generateUUID } from "@utils/generateUUID";

export function CreateNewMeal() {
	const { mealCreate } = useMeals();
	const navigation = useNavigation();

	async function handleSubmit(meal: RegisterMealType) {
		await mealCreate({
			createdAt: new Date().toISOString(),
			date: meal.date,
			name: meal.name,
			ID: generateUUID(),
			time: meal.hour,
			type: meal.mealType,
			description: meal.description,
		});
		navigation.navigate("new_meal_feedback", {
			type: meal.mealType,
		});
	}

	return (
		<>
			<MealFormTemplate
				title="Nova Refeição"
				buttonSubmitLabel="Cadastrar Refeição"
				onSubmit={(data) => handleSubmit(data)}
			/>
		</>
	);
}
