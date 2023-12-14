import styled, { css } from "styled-components/native";
import { StatusBar, View } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import theme from "@theme/index";

export const StatusBarStyles = styled(StatusBar).attrs(({ theme }) => ({
	backgroundColor: theme.COLORS.GREEN_LIGHT,
}))``;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	color: theme.COLORS.GREEN_DARK,
	size: theme.METRICS.pixel(24),
}))``;

export const Header = styled.View`
	${({ theme }) => css`
		width: 100%;
		background-color: ${theme.COLORS.GREEN_LIGHT};
		padding: ${theme.METRICS.pixel(56)}px ${theme.METRICS.pixel(24)}px;
		justify-content: center;
	`}
`;

export const PercentageText = styled.Text`
	${({ theme }) => css`
		text-align: center;
		max-width: 100%;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.HG)}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		text-align: center;
		max-width: 100%;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;

export const GeneralStatisticsWrapper = styled(View).attrs(() => ({
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
		min-height: 100%;
		padding: ${theme.METRICS.pixel(24)}px;
		background-color: ${theme.COLORS.GRAY_100};
		border-top-right-radius: ${theme.METRICS.pixel(20)}px;
		border-top-left-radius: ${theme.METRICS.pixel(20)}px;
		margin-top: ${theme.METRICS.pixel(-20)}px;
	`}
`;

export const GeneralStatisticsTitle = styled.Text`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.XSM)}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-bottom: ${theme.METRICS.pixel(24)}px;
		color: ${theme.COLORS.GRAY_700};
	`}
`;

export const GreyCard = styled.View`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.METRICS.pixel(24)}px;
		background-color: ${theme.COLORS.GRAY_200};
		border-radius: ${theme.METRICS.pixel(theme.BORDER_RADIUS.CARD)}px;
		margin-bottom: ${theme.METRICS.pixel(16)}px;
	`}
`;

export const BaseNumberText = styled.Text`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.XL)}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-bottom: ${theme.METRICS.pixel(8)}px;
		color: ${theme.COLORS.GRAY_700};
	`}
`;

export const BaseDescriptionText = styled.Text`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_700};
	`}
`;

export const SmallCard = styled(GreyCard)<{
	bgColor: keyof typeof theme.COLORS;
}>`
	${({ theme, bgColor }) => css`
		flex: 1;
		background-color: ${theme.COLORS[bgColor]};
		margin-bottom: 0px;
	`}
`;

export const SmallCardsWrapper = styled.View`
	width: 100%;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	gap: ${({ theme }) => theme.METRICS.pixel(8)}px;
`;
