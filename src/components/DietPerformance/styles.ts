import theme from "@theme/index";
import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export type DietPerformanceBackgroundType = keyof typeof theme.COLORS;

export type DietPerformanceStylesProps = {
	backgroundColor: DietPerformanceBackgroundType;
};

export const Container = styled(TouchableOpacity)<DietPerformanceStylesProps>`
	width: 100%;
	padding: ${theme.METRICS.pixel(12)}px ${theme.METRICS.pixel(24)}px
		${theme.METRICS.pixel(24)}px ${theme.METRICS.pixel(24)}px;
	background-color: ${({ theme, backgroundColor }) =>
		theme.COLORS[backgroundColor]};
	align-items: center;
	justify-content: center;
	border-radius: ${({ theme }) =>
		theme.METRICS.pixel(theme.BORDER_RADIUS.CARD)};
`;

export const PercentageText = styled.Text`
	${({ theme }) => css`
		text-align: center;
		max-width: 100%;
		font-size: ${theme.FONT_SIZE.HG}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		text-align: center;
		max-width: 100%;
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;

export const IconWrapper = styled.Pressable`
	width: 100%;
	align-items: flex-end;
	justify-content: flex-end;
`;
