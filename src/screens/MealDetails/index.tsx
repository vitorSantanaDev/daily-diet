import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { Button } from "@components/Button";
import { Dialog } from "@components/Dialog";
import { ScreenDetailsWrapper } from "@components/ScreenDetailsWrapper";

import { useMeals } from "@storage/meals/useMeals";
import { ETypeOfMeal, IMeal } from "@interfaces/meal.interface";

import * as S from "./styles";

export function MealDetails() {
	const [showDialogConfirmDeleteMeal, setShowDialogConfirmDeleteMeal] =
		useState(false);

	const { METRICS, COLORS } = useTheme();

	const route = useRoute();
	const { meal } = route.params as { meal: IMeal };

	const navigation = useNavigation();

	const { mealDelete } = useMeals();

	const headerBgColor: keyof typeof COLORS =
		meal.type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
			? "RED_LIGHT"
			: "GREEN_LIGHT";

	const tagMealTypeText =
		meal.type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
			? "Fora da dieta"
			: "Dentro da dieta";

	function handleDeleteMeal() {
		setShowDialogConfirmDeleteMeal(true);
	}

	async function handleConfirmDeleteMeal(mealID: string) {
		await mealDelete(mealID);
		setShowDialogConfirmDeleteMeal(false);
		navigation.navigate("home");
	}

	function goToEditMealScreen() {
		navigation.navigate("edit_meal", { meal });
	}

	return (
		<>
			<ScreenDetailsWrapper backgroundColor={headerBgColor} title="Refeição">
				<S.Wrapper>
					<View>
						<S.Title>{meal.name}</S.Title>
						<S.Description>{meal.description}</S.Description>
						<S.DateAndHourLabel>Data e Hora</S.DateAndHourLabel>
						<S.Description>
							{meal.date} as {meal.time}
						</S.Description>
						<S.TagMealType>
							<S.IndicatorTag mealType={meal.type} />
							<S.TagMealTypeText>{tagMealTypeText}</S.TagMealTypeText>
						</S.TagMealType>
					</View>
					<View style={{ gap: METRICS.pixel(8) }}>
						<Button
							icon={
								<PencilSimpleLine
									size={METRICS.pixel(18)}
									color={COLORS.WHITE}
								/>
							}
							label="Editar refeição"
							onPress={goToEditMealScreen}
						/>
						<Button
							type="OUTLINE"
							label="Excluir refeição"
							onPress={handleDeleteMeal}
							icon={<Trash color={COLORS.GRAY_700} size={METRICS.pixel(18)} />}
						/>
					</View>
				</S.Wrapper>
			</ScreenDetailsWrapper>
			<Dialog
				isVisible={showDialogConfirmDeleteMeal}
				onClose={() => setShowDialogConfirmDeleteMeal(false)}
				title="Deseja realmente excluir o registro da refeição?"
				onActionConfirm={() => handleConfirmDeleteMeal(String(meal.ID))}
			/>
		</>
	);
}
