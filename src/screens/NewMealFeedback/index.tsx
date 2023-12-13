import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ETypeOfMeal } from "@interfaces/meal.interface";

import NewMealHappyFeedbackIllustration from "@assets/images/new_meal_happy_feedback_Illustration.svg";
import NewMealSadFeedbackIllustration from "@assets/images/new_meal_sad_feedback_Illustration.svg";

import { Button } from "@components/Button";

import * as S from "./styles";

export function NewMealFeedback() {
	const {
		METRICS: { pixel },
	} = useTheme();

	const navigation = useNavigation();
	const route = useRoute();

	const { type } = route.params as { type: ETypeOfMeal };

	return (
		<>
			<S.Wrapper>
				<S.Content>
					<S.Title type={type}>
						{type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
							? "Que pena!"
							: "Continue assim!"}
					</S.Title>
					<S.Description>
						{type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
							? "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
							: "Você continua dentro da dieta. Muito bem!"}
					</S.Description>
					<View style={{ marginTop: pixel(32) }}>
						{type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET ? (
							<NewMealSadFeedbackIllustration />
						) : (
							<NewMealHappyFeedbackIllustration />
						)}
					</View>

					<Button
						type="PRIMARY"
						onPress={() => navigation.navigate("home")}
						label="Ir para a página inicial"
						style={{ width: pixel(191), marginTop: pixel(16) }}
					/>
				</S.Content>
			</S.Wrapper>
		</>
	);
}
