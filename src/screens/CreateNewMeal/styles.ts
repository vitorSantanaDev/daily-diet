import styled, { css } from "styled-components/native";
import { StatusBar, View } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export type MealTypeOption = "YES" | "NO" | "UNSELECTED";

export const StatusBarStyles = styled(StatusBar).attrs(({ theme }) => ({
	backgroundColor: theme.COLORS.GRAY_300,
}))``;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	color: theme.COLORS.GRAY_600,
	size: theme.METRICS.pixel(24),
}))``;

export const BackContainer = styled.TouchableOpacity`
	left: 16px;
	position: absolute;
`;

export const Header = styled.View`
	${({ theme }) => css`
		width: 100%;
		position: relative;
		background-color: ${theme.COLORS.GRAY_300};
		padding: ${theme.METRICS.pixel(56)}px ${theme.METRICS.pixel(16)}px;
		justify-content: center;
		align-items: center;
	`}
`;

export const Title = styled.Text`
	${({ theme }) => css`
		max-width: 100%;
		text-align: center;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.LG)}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const Content = styled(View).attrs(() => ({
	style: {
		shadowColor: "rgba(0,0,0,0.5)",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 6.27,

		elevation: 10,
	},
}))`
	${({ theme }) => css`
		flex: 1;
		flex-direction: row;
		justify-content: center;
		padding: ${theme.METRICS.pixel(24)}px;
		border-top-right-radius: ${theme.METRICS.pixel(20)}px;
		border-top-left-radius: ${theme.METRICS.pixel(20)}px;
		background-color: ${theme.COLORS.GRAY_100};
		margin-top: ${theme.METRICS.pixel(-20)}px;
	`}
`;

export const Wrapper = styled.View`
	flex: 1;
	justify-content: space-between;
`;

export const Form = styled.View`
	flex: 1;
`;

export const DescriptionFieldWrapper = styled.View`
	${({ theme }) => css`
		margin: ${theme.METRICS.pixel(16)}px 0px;
	`}
`;

export const RowWrapper = styled.View`
	gap: ${({ theme }) => theme.METRICS.pixel(16)}px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const MealTypeSelectLabel = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_600};
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-bottom: ${theme.METRICS.pixel(8)}px;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
	`}
`;

export const MealTypeOptionsWrapper = styled.View`
	margin-top: ${({ theme }) => theme.METRICS.pixel(24)}px;
`;

export const MealTypeOption = styled.TouchableOpacity<{
	isSelected: boolean;
	type: MealTypeOption;
}>`
	${({ theme, isSelected, type }) => css`
		flex-direction: row;
		align-items: center;
		gap: ${theme.METRICS.pixel(4)}px;
		justify-content: center;
		padding: ${theme.METRICS.pixel(16)}px;

		background-color: ${isSelected && type === "YES"
			? theme.COLORS.GREEN_LIGHT
			: isSelected && type === "NO"
			? theme.COLORS.RED_LIGHT
			: theme.COLORS.GRAY_200};

		${isSelected &&
		css`
			border-width: 1px;
			border-color: ${type === "YES"
				? theme.COLORS.GREEN_DARK
				: theme.COLORS.RED_DARK};
		`}

		border-radius: ${theme.METRICS.pixel(theme.BORDER_RADIUS.BUTTON)}px;
	`}
`;

export const MealTypeText = styled.Text`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_700};
	`}
`;

export const CircleIndicatorRed = styled.View`
	${({ theme }) => css`
		width: ${theme.METRICS.pixel(8)}px;
		height: ${theme.METRICS.pixel(8)}px;
		border-radius: ${theme.METRICS.pixel(8 / 2)}px
		background-color: ${theme.COLORS.RED_DARK};
	`}
`;

export const CircleIndicatorGreen = styled(CircleIndicatorRed)`
	background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;
