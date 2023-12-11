import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export function Statistics() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<ScrollView
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
					{new Intl.NumberFormat("pt-BR").format(88.8888)}%
				</S.PercentageText>
				<S.Description>Of meals within the diet</S.Description>
			</S.Header>
			<S.GeneralStatisticsWrapper>
				<S.GeneralStatisticsTitle>General Statistic</S.GeneralStatisticsTitle>
				<S.GreyCard>
					<S.BaseNumberText>22</S.BaseNumberText>
					<S.BaseDescriptionText>
						melhor sequência de pratos dentro da dieta
					</S.BaseDescriptionText>
				</S.GreyCard>
				<S.GreyCard>
					<S.BaseNumberText>132</S.BaseNumberText>
					<S.BaseDescriptionText>refeições registradas</S.BaseDescriptionText>
				</S.GreyCard>
				<S.SmallCardsWrapper>
					<S.SmallCard bgColor="GREEN_LIGHT">
						<S.BaseNumberText>132</S.BaseNumberText>
						<S.BaseDescriptionText>
							refeições dentro da dieta
						</S.BaseDescriptionText>
					</S.SmallCard>
					<S.SmallCard bgColor="RED_LIGHT">
						<S.BaseNumberText>132</S.BaseNumberText>
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
