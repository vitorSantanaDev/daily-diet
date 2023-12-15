import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { EditMeal } from "@screens/EditMeal";
import { Statistics } from "@screens/Statistics";
import { MealDetails } from "@screens/MealDetails";
import { CreateNewMeal } from "@screens/CreateNewMeal";
import { NewMealFeedback } from "@screens/NewMealFeedback";

import { RoutesName } from "./routes-name";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{ headerShown: false, animation: "slide_from_right" }}
		>
			<Screen name={RoutesName.HOME} component={Home} />
			<Screen name={RoutesName.STATISTICS} component={Statistics} />
			<Screen name={RoutesName.CREATE_NEW_MEAL} component={CreateNewMeal} />
			<Screen name={RoutesName.NEW_MEAL_FEEDBACK} component={NewMealFeedback} />
			<Screen name={RoutesName.MEAL_DETAILS} component={MealDetails} />
			<Screen name={RoutesName.EDIT_MEAL} component={EditMeal} />
		</Navigator>
	);
}
