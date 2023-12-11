import { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

import theme from "@theme/index";

import * as S from "./styles";

type ScreenDetailsWrapperProps = {
	title: string;
	backgroundColor?: keyof typeof theme.COLORS;
	onGoBack: () => void;
	children: ReactNode;
};

export function ScreenDetailsWrapper({
	title,
	children,
	onGoBack,
	backgroundColor = "GRAY_300",
}: ScreenDetailsWrapperProps) {
	return (
		<ScrollView
			scrollEnabled={false}
			contentContainerStyle={{ flex: 1 }}
			style={styles.container}
		>
			<S.StatusBarStyles />
			<S.Header backgroundColor={backgroundColor}>
				<S.Title>{title}</S.Title>
				<S.BackContainer onPress={onGoBack}>
					<S.ArrowLeftIcon />
				</S.BackContainer>
			</S.Header>
			<S.Content>{children}</S.Content>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
