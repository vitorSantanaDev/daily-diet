import { View } from "react-native";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";

import { useErros } from "@hooks/useErros";
import { dateMask, hourMask } from "@utils/masks";

import { Button } from "@components/Button";
import { TextInputComponent } from "@components/TextInputComponent";
import { ScreenDetailsWrapper } from "@components/ScreenDetailsWrapper";

import { ETypeOfMeal } from "@interfaces/snack.interface";

import * as Haptics from "expo-haptics";
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
	const [formIsValid, setFormIsValid] = useState(false);

	const { METRICS } = useTheme();
	const { setError, errors, removeError } = useErros();

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
		setFormValues((prevState) => ({ ...prevState, description: value }));
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
		const { date, hour, name, mealType, description } = formValues;
		setFormIsValid(
			!!date && !!hour && !!name && mealType !== "UNSELECTED" && !!description
		);
	}, [formValues]);

	useEffect(feedbackWhenFormError, [formIsValid]);

	return (
		<ScreenDetailsWrapper title={title}>
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
					label={buttonSubmitLabel}
					onPress={handleSubmit}
				/>
			</S.Wrapper>
		</ScreenDetailsWrapper>
	);
}
