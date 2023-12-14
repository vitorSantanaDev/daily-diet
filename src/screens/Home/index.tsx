import {
	View,
	FlatList,
	StyleSheet,
	SafeAreaView,
	SectionList,
} from "react-native";
import { useCallback, useMemo, useState } from "react";
import { format } from "date-fns";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { SnackCard } from "@components/SnackCard";
import { Placeholder } from "@components/Placeholder";
import { DietPerformance } from "@components/DietPerformance";

import { RoutesName } from "@routes/routes-name";
import { useMeals } from "@storage/meals/useMeals";
import { ETypeOfMeal, IMeal } from "@interfaces/meal.interface";

import * as S from "./styles";

export function Home() {
	const { top } = useSafeAreaInsets();

	const navigation = useNavigation();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			marginTop: top,
		},
	});

	const { METRICS, COLORS } = useTheme();
	const { getAllMeals } = useMeals();

	const [mealsStored, setMealsStored] = useState<IMeal[]>([]);

	function calculatePercentageOfMealsWithinTheDiet(meals: IMeal[]): number {
		const totalMeals = meals.length;

		if (!totalMeals) return 0;

		let dietMeals = 0;

		for (const meal of meals) {
			if (meal.type === ETypeOfMeal.MEAL_WITHIN_THE_DIET) {
				dietMeals++;
			}
		}

		return (dietMeals / totalMeals) * 100;
	}

	const percentageOfMealsWithinTheDiet = useMemo(() => {
		return calculatePercentageOfMealsWithinTheDiet(mealsStored);
	}, [mealsStored]);

	function findBestSequenceOfDishesWhitinTheDiet(meals: IMeal[]): number {
		let maxSequence = 0;
		let currentSequence = 0;

		for (const meal of meals) {
			if (meal.type === ETypeOfMeal.MEAL_WITHIN_THE_DIET) {
				currentSequence++;
			} else {
				maxSequence = Math.max(maxSequence, currentSequence);
				currentSequence = 0;
			}
		}

		return Math.max(maxSequence, currentSequence);
	}

	const bestSequenceOfDishesWhitinTheDiet = useMemo(() => {
		return findBestSequenceOfDishesWhitinTheDiet(mealsStored);
	}, [mealsStored]);

	const totalMealsOutsideTheDiet = useMemo(() => {
		return mealsStored.filter(
			(meal) => meal.type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
		).length;
	}, [mealsStored]);

	const totalMealsWithinTheDiet = useMemo(() => {
		return mealsStored.filter(
			(meal) => meal.type === ETypeOfMeal.MEAL_WITHIN_THE_DIET
		).length;
	}, [mealsStored]);

	const meals = useMemo(() => {
		const result: { day: string; meals: IMeal[] }[] = [];

		for (const meal of mealsStored) {
			const alreadyExistingItemIndex = result.findIndex(
				(i) => i.day.replace(/T.*/, "") === meal.createdAt?.replace(/T.*/, "")
			);

			if (alreadyExistingItemIndex !== -1) {
				const item = result[alreadyExistingItemIndex];

				item.meals.push(meal);

				const itemUpdated = { ...item };

				result.splice(alreadyExistingItemIndex, 1, itemUpdated);
			} else {
				result.push({ day: String(meal.createdAt), meals: [meal] });
			}
		}

		return result;
	}, [mealsStored]);

	const sectionListData = useMemo(() => {
		return meals.map((item) => {
			const dateFormatted = format(new Date(item.day), "dd.MM.yyyy");

			return { title: dateFormatted, data: item.meals };
		});
	}, [meals]);

	function handleGoToScreenForCreatingANewMeal() {
		navigation.navigate("create_new_meal");
	}

	function getMealsStored() {
		(async () => {
			const response = await getAllMeals();
			setMealsStored(response);
		})();
	}

	function handleGoToMealDetails(meal: IMeal) {
		navigation.navigate("meal_details", { meal });
	}

	function handleGoToStatistics() {
		navigation.navigate(RoutesName.STATISTICS, {
			statistics: {
				percentageOfMealsWithinTheDiet,
				bestSequenceOfDishesWhitinTheDiet,
				totalMealsRecorded: mealsStored.length,
				totalMealsOutsideTheDiet,
				totalMealsWithinTheDiet,
			},
		});
	}

	useFocusEffect(
		useCallback(() => {
			getMealsStored();
		}, [])
	);

	return (
		<>
			<SafeAreaView style={styles.container}>
				<Header />
				<FlatList
					data={[0]}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						paddingVertical: METRICS.pixel(24),
						paddingHorizontal: METRICS.pixel(16),
					}}
					renderItem={() => (
						<>
							<DietPerformance
								percentage={percentageOfMealsWithinTheDiet}
								description="Refeições dentro da dieta"
								style={{ marginBottom: METRICS.pixel(36) }}
								onPress={handleGoToStatistics}
							/>
							<S.Meals>Refeições</S.Meals>
							<Button
								label="Nova refeição"
								icon={
									<Plus
										weight="bold"
										size={METRICS.pixel(18)}
										color={COLORS.WHITE}
									/>
								}
								onPress={handleGoToScreenForCreatingANewMeal}
							/>
							<SectionList
								ListEmptyComponent={
									<Placeholder description="Parece que você ainda não tem refeições cadastradas. Cadastre sua primeira refeição clicando no botão acima!" />
								}
								style={{ paddingVertical: METRICS.pixel(32) }}
								sections={sectionListData}
								ItemSeparatorComponent={() => (
									<View style={{ marginBottom: METRICS.pixel(8) }} />
								)}
								SectionSeparatorComponent={() => (
									<View style={{ marginBottom: METRICS.pixel(16) }} />
								)}
								renderItem={({ item }) => (
									<SnackCard
										type={item.type}
										time={item.time}
										mealName={item.name}
										onPress={() => handleGoToMealDetails(item)}
									/>
								)}
								renderSectionHeader={({ section: { title } }) => (
									<S.SectionHeader>{title}</S.SectionHeader>
								)}
							/>
						</>
					)}
				/>
			</SafeAreaView>
		</>
	);
}
