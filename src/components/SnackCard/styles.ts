import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type MealTagType = "MEAL_WITHIN_THE_DIET" | "MEAL_OUTSIDE_THE_DIET";

export const Container = styled(TouchableOpacity)`
	${({ theme }) => css`
		border-width: 1px;
		padding: ${theme.METRICS.pixel(12)}px;
		border-color: ${theme.COLORS.GRAY_300};
		border-radius: ${theme.BORDER_RADIUS.BUTTON}px;
		flex-direction: row;
		align-items: center;
	`}
`;

export const Time = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.XSM)}px;
		color: ${theme.COLORS.GRAY_700};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const Separator = styled.View`
	height: 80%;
	width: ${({ theme }) => theme.METRICS.pixel(1)}px;
	margin: 0 ${({ theme }) => theme.METRICS.pixel(8)}px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Row = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const MealName = styled.Text`
	${({ theme }) => css`
		max-width: ${theme.METRICS.pixel(200)}px;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.MD)}px;
		color: ${theme.COLORS.GRAY_600};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;

export const MealTag = styled.View<{ type: MealTagType }>`
	${({ theme, type }) => css`
		width: ${theme.METRICS.pixel(14)}px;
		height: ${theme.METRICS.pixel(14)}px;
		border-radius: ${theme.METRICS.pixel(14 / 2)}px;
		background-color: ${type === "MEAL_OUTSIDE_THE_DIET"
			? theme.COLORS.RED_MID
			: theme.COLORS.GREEN_MID};
	`}
`;
