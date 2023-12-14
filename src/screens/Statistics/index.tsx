import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as S from "./styles";
import { IMealStatistics } from "@interfaces/mealStatistics.interface";

export function Statistics() {
	const navigation = useNavigation();
	const route = useRoute();
	const { statistics } = route.params as { statistics: IMealStatistics };

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<ScrollView
			bounces={false}
			scrollEnabled={false}
			contentContainerStyle={{ flex: 1 }}
			style={styles.container}
		>
			<S.StatusBarStyles />
			<S.Header>
				<TouchableOpacity onPress={handleGoBack}>
					<S.ArrowLeftIcon />
				</TouchableOpacity>
				<S.PercentageText>
					{new Intl.NumberFormat("pt-BR").format(
						statistics.percentageOfMealsWithinTheDiet
					)}
					%
				</S.PercentageText>
				<S.Description>das refeições dentro da dieta</S.Description>
			</S.Header>
			<S.GeneralStatisticsWrapper>
				<S.GeneralStatisticsTitle>Estatísticas gerais</S.GeneralStatisticsTitle>
				<S.GreyCard>
					<S.BaseNumberText>
						{statistics.bestSequenceOfDishesWhitinTheDiet}
					</S.BaseNumberText>
					<S.BaseDescriptionText>
						melhor sequência de pratos dentro da dieta
					</S.BaseDescriptionText>
				</S.GreyCard>
				<S.GreyCard>
					<S.BaseNumberText>{statistics.totalMealsRecorded}</S.BaseNumberText>
					<S.BaseDescriptionText>refeições registradas</S.BaseDescriptionText>
				</S.GreyCard>
				<S.SmallCardsWrapper>
					<S.SmallCard bgColor="GREEN_LIGHT">
						<S.BaseNumberText>
							{statistics.totalMealsWithinTheDiet}
						</S.BaseNumberText>
						<S.BaseDescriptionText>
							refeições dentro da dieta
						</S.BaseDescriptionText>
					</S.SmallCard>
					<S.SmallCard bgColor="RED_LIGHT">
						<S.BaseNumberText>
							{statistics.totalMealsOutsideTheDiet}
						</S.BaseNumberText>
						<S.BaseDescriptionText>
							refeições fora da dieta
						</S.BaseDescriptionText>
					</S.SmallCard>
				</S.SmallCardsWrapper>
			</S.GeneralStatisticsWrapper>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
