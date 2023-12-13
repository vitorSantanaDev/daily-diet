import {
	View,
	FlatList,
	StyleSheet,
	SafeAreaView,
	SectionList,
} from "react-native";
import { format } from "date-fns";
import { Plus } from "phosphor-react-native";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import {
	useFocusEffect,
	useIsFocused,
	useNavigation,
} from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { SnackCard } from "@components/SnackCard";
import { DietPerformance } from "@components/DietPerformance";

import { RoutesName } from "@routes/routes-name";
import { useMeals } from "@storage/meals/useMeals";
import { IMeal } from "@interfaces/meal.interface";

import * as S from "./styles";

export function Home() {
	const { top } = useSafeAreaInsets();

	const navigation = useNavigation();
	const isFocused = useIsFocused();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			marginTop: top,
		},
	});

	const { METRICS, COLORS } = useTheme();
	const { getAllMeals } = useMeals();

	const [mealsStored, setMealsStored] = useState<IMeal[]>([]);

	const meals = useMemo(() => {
		const result: { day: string; meals: IMeal[] }[] = [];

		for (const meal of mealsStored) {
			const alreadyExistingItemIndex = result.findIndex(
				(i) => i.day === meal.createdAt
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
								percentage={98.99}
								description="Refeições dentro da dieta"
								style={{ marginBottom: METRICS.pixel(36) }}
								onPress={() => navigation.navigate(RoutesName.STATISTICS)}
							/>
							<S.Meals>Meals</S.Meals>
							<Button
								label="New meal"
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
