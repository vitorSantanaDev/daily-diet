import { ISnack } from "@interfaces/snack.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storage-config";

export function useMeals() {
	async function getAllMeals() {
		try {
			const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

			const meals: ISnack[] = storage ? JSON.parse(storage) : [];

			return meals;
		} catch (err) {
			throw err;
		}
	}

	async function mealCreate(meal: ISnack) {
		try {
			const storedMeals = await getAllMeals();

			const mealAlreadyExists = storedMeals.findIndex((m) => m.ID === meal.ID);

			if (mealAlreadyExists !== -1) {
				throw new Error(`Meal ${meal.name} already exists`);
			}

			const storage = JSON.stringify([...storedMeals, meal]);

			await AsyncStorage.setItem(MEALS_COLLECTION, storage);
		} catch (err) {
			throw err;
		}
	}

	async function mealDelete(mealID: string) {
		try {
			const storedMeals = await getAllMeals();

			const filteredMeals = storedMeals.filter((m) => m.ID !== mealID);

			const storageMeal = JSON.stringify(filteredMeals);

			await AsyncStorage.setItem(MEALS_COLLECTION, storageMeal);
		} catch (err) {
			throw err;
		}
	}

	return { getAllMeals, mealCreate, mealDelete };
}
