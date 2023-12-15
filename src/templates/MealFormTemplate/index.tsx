import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Touchable,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";

import { useErros } from "@hooks/useErros";
import { dateMask, hourMask } from "@utils/masks";

import { Button } from "@components/Button";
import { TextInputComponent } from "@components/TextInputComponent";
import { ScreenDetailsWrapper } from "@components/ScreenDetailsWrapper";

import { ETypeOfMeal } from "@interfaces/meal.interface";

import * as S from "./styles";

export type FormValues = {
	date: string;
	hour: string;
	name: string;
	description: string;
	mealType: S.MealTypeOption;
};

export type RegisterMealType = Pick<
	FormValues,
	"date" | "description" | "hour" | "name"
> & { mealType: ETypeOfMeal };

type MealFormTemplateProps = {
	title: string;
	buttonSubmitLabel: string;
	defautlValues?: FormValues;
	onSubmit: (data: RegisterMealType) => void;
};

export function MealFormTemplate({
	title,
	onSubmit,
	defautlValues,
	buttonSubmitLabel,
}: MealFormTemplateProps) {
	const [formValues, setFormValues] = useState<FormValues>({
		date: defautlValues?.date || "",
		hour: defautlValues?.hour || "",
		name: defautlValues?.name || "",
		description: defautlValues?.description || "",
		mealType: defautlValues?.mealType || "UNSELECTED",
	});
	const [formIsValid, setFormIsValid] = useState(true);

	const { METRICS } = useTheme();
	const { setError, errors, removeError } = useErros();

	const isEditingAndTheNewValuesAreTheSameAsTheOldValues = useMemo(() => {
		if (!defautlValues) return false;
		return (
			defautlValues.name === formValues.name &&
			defautlValues.description === formValues.description &&
			defautlValues.date === formValues.date &&
			defautlValues.hour === formValues.hour &&
			defautlValues.mealType === formValues.mealType
		);
	}, [defautlValues, formValues]);

	async function handleSubmit() {
		onSubmit({
			date: formValues.date,
			name: formValues.name,
			hour: formValues.hour,
			mealType:
				formValues.mealType === "NO"
					? ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
					: ETypeOfMeal.MEAL_WITHIN_THE_DIET,
			description: formValues.description,
		});
	}

	function handleYesOrNoToMealWithinTheDiet(value: "YES" | "NO") {
		setFormValues((prevState) => ({ ...prevState, mealType: value }));
	}

	function setRequiredFieldError({
		field,
	}: {
		field: keyof Pick<FormValues, "date" | "hour" | "description" | "name">;
	}) {
		setError({ message: "Este campo é obrigatório.", field });
	}

	function setInvalidInputError({
		field,
	}: {
		field: keyof Pick<FormValues, "date" | "hour">;
	}) {
		const fieldTranslated = field === "date" ? "data" : "hora";

		const message = `Por favor, insira uma ${fieldTranslated} válida.`;

		setError({
			message,
			field,
		});
	}

	function handleChangeName(value: string) {
		setFormValues((prevState) => ({ ...prevState, name: value }));
		if (!value) {
			setRequiredFieldError({ field: "name" });
			return;
		}
		removeError("name");
	}

	function handleChangeDescription(value: string) {
		setFormValues((prevState) => ({ ...prevState, description: value }));
		if (!value) {
			setRequiredFieldError({ field: "description" });
			return;
		}
		removeError("description");
	}

	function handleChangeDate(value: string) {
		setFormValues((prevState) => ({ ...prevState, date: value }));
		if (!value) {
			setRequiredFieldError({ field: "date" });
			return;
		}

		if (value.length < 10) {
			setInvalidInputError({ field: "date" });
			return;
		}
		removeError("date");
	}

	function handleChangeHour(value: string) {
		setFormValues((prevState) => ({ ...prevState, hour: value }));
		if (!value) {
			setRequiredFieldError({ field: "hour" });
			return;
		}
		if (value.length < 5) {
			setInvalidInputError({ field: "hour" });
			return;
		}
		removeError("hour");
	}

	useEffect(() => {
		const { date, hour, name, mealType, description } = formValues;
		setFormIsValid(
			!!date && !!hour && !!name && mealType !== "UNSELECTED" && !!description
		);
	}, [formValues]);

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			keyboardVerticalOffset={-100}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScreenDetailsWrapper title={title}>
					<S.Wrapper>
						<S.Form>
							<TextInputComponent
								label="Nome"
								value={formValues.name}
								onChangeText={handleChangeName}
								errorMessage={
									errors.find((err) => err.field === "name")?.message
								}
							/>
							<S.DescriptionFieldWrapper>
								<TextInputComponent
									multiline
									label="Descrição"
									value={formValues.description}
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
										keyboardType="numeric"
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
										keyboardType="numeric"
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
								<S.MealTypeSelectLabel>
									Está dentro da dieta?
								</S.MealTypeSelectLabel>
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
							disabled={
								!formIsValid || isEditingAndTheNewValuesAreTheSameAsTheOldValues
							}
							label={buttonSubmitLabel}
							onPress={handleSubmit}
						/>
					</S.Wrapper>
				</ScreenDetailsWrapper>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
