import theme from "@theme/index";
import { ArrowLeft } from "phosphor-react-native";
import { StatusBar, View } from "react-native";
import styled, { css } from "styled-components/native";

export const StatusBarStyles = styled(StatusBar).attrs(({ theme }) => ({
	backgroundColor: theme.COLORS.GRAY_300,
}))``;

export const Header = styled.View<{
	backgroundColor: keyof typeof theme.COLORS;
}>`
	${({ theme, backgroundColor }) => css`
		width: 100%;
		position: relative;
		background-color: ${theme.COLORS[backgroundColor]};
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

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	color: theme.COLORS.GRAY_600,
	size: theme.METRICS.pixel(24),
}))``;

export const BackContainer = styled.TouchableOpacity`
	left: 16px;
	position: absolute;
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
