import { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "@components/Button";
import { TextInputComponent } from "@components/TextInputComponent";
import { ScreenDetailsWrapper } from "@components/ScreenDetailsWrapper";

import { useErros } from "@hooks/useErros";
import { dateMask, hourMask } from "@utils/masks";
import { useMeals } from "@storage/meals/useMeals";
import { generateUUID } from "@utils/generateUUID";
import { ETypeOfMeal } from "@interfaces/snack.interface";

import * as Haptics from "expo-haptics";

import * as S from "./styles";

type FormValues = {
	date: string;
	hour: string;
	name: string;
	decsription: string;
	mealType: S.MealTypeOption;
};

export function CreateNewMeal() {
	const [formValues, setFormValues] = useState<FormValues>({
		date: "",
		hour: "",
		name: "",
		decsription: "",
		mealType: "UNSELECTED",
	});
	const [formIsValid, setFormIsValid] = useState(false);

	const { mealCreate } = useMeals();
	const navigation = useNavigation();
	const { METRICS, COLORS } = useTheme();
	const { setError, errors, removeError } = useErros();

	async function submit() {
		await mealCreate({
			createdAt: new Date().toISOString(),
			name: formValues.name,
			ID: generateUUID(),
			time: formValues.hour,
			type:
				formValues.mealType === "NO"
					? ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
					: ETypeOfMeal.MEAL_WITHIN_THE_DIET,
		});
		navigation.navigate("new_meal_feedback", {
			type:
				formValues.mealType === "NO"
					? ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
					: ETypeOfMeal.MEAL_WITHIN_THE_DIET,
		});
	}

	function handleGoBack() {
		navigation.goBack();
	}

	function handleYesOrNoToMealWithinTheDiet(value: "YES" | "NO") {
		setFormValues((prevState) => ({ ...prevState, mealType: value }));
	}

	function setRequiredFieldError({
		value,
		field,
	}: {
		value: string;
		field: string;
	}) {
		if (!value) {
			setError({ message: "This field is required", field });
		} else {
			removeError(field);
		}
	}

	function handleChangeName(value: string) {
		setFormValues((prevState) => ({ ...prevState, name: value }));
		setRequiredFieldError({ value, field: "name" });
	}

	function handleChangeDescription(value: string) {
		setFormValues((prevState) => ({ ...prevState, decsription: value }));
		setRequiredFieldError({ value, field: "description" });
	}

	function handleChangeDate(value: string) {
		setFormValues((prevState) => ({ ...prevState, date: value }));
		setRequiredFieldError({ value, field: "date" });
	}

	function handleChangeHour(value: string) {
		setFormValues((prevState) => ({ ...prevState, hour: value }));
		setRequiredFieldError({ value, field: "hour" });
	}

	function feedbackWhenFormError() {
		if (!formIsValid)
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
	}

	useEffect(() => {
		const { date, hour, name, mealType, decsription } = formValues;
		setFormIsValid(
			!!date && !!hour && !!name && mealType !== "UNSELECTED" && !!decsription
		);
	}, [formValues]);

	useEffect(feedbackWhenFormError, [formIsValid]);

	return (
		<ScreenDetailsWrapper title="Nova Refeição" onGoBack={handleGoBack}>
			<S.Wrapper>
				<S.Form>
					<TextInputComponent
						label="Nome"
						onChangeText={handleChangeName}
						errorMessage={errors.find((err) => err.field === "name")?.message}
					/>
					<S.DescriptionFieldWrapper>
						<TextInputComponent
							multiline
							label="Descrição"
							style={{ height: METRICS.pixel(120) }}
							onChangeText={handleChangeDescription}
							errorMessage={
								errors.find((err) => err.field === "description")?.message
							}
						/>
					</S.DescriptionFieldWrapper>
					<S.RowWrapper>
						<View style={{ flex: 1 }}>
							<TextInputComponent
								label="Data"
								maxLength={10}
								onChangeText={handleChangeDate}
								value={dateMask(formValues.date)}
								errorMessage={
									errors.find((err) => err.field === "date")?.message
								}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputComponent
								label="Hora"
								maxLength={5}
								onChangeText={handleChangeHour}
								value={hourMask(formValues.hour)}
								errorMessage={
									errors.find((err) => err.field === "hour")?.message
								}
							/>
						</View>
					</S.RowWrapper>
					<S.MealTypeOptionsWrapper>
						<S.MealTypeSelectLabel>Está dentro da dieta?</S.MealTypeSelectLabel>
						<S.RowWrapper>
							<View style={{ flex: 1 }}>
								<S.MealTypeOption
									type={formValues.mealType}
									isSelected={formValues.mealType === "YES"}
									onPress={() => handleYesOrNoToMealWithinTheDiet("YES")}
								>
									<S.CircleIndicatorGreen />
									<S.MealTypeText>Sim</S.MealTypeText>
								</S.MealTypeOption>
							</View>
							<View style={{ flex: 1 }}>
								<S.MealTypeOption
									type={formValues.mealType}
									isSelected={formValues.mealType === "NO"}
									onPress={() => handleYesOrNoToMealWithinTheDiet("NO")}
								>
									<S.CircleIndicatorRed />
									<S.MealTypeText>Não</S.MealTypeText>
								</S.MealTypeOption>
							</View>
						</S.RowWrapper>
					</S.MealTypeOptionsWrapper>
				</S.Form>
				<Button
					disabled={!formIsValid}
					label="Cadastrar Refeição"
					style={{ backgroundColor: COLORS.GRAY_600 }}
					onPress={submit}
				/>
			</S.Wrapper>
		</ScreenDetailsWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
