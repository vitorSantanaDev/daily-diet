import { ETypeOfMeal } from "@interfaces/snack.interface";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
	flex: 1;
	justify-content: space-between;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.LG + 2)}px;
		color: ${theme.COLORS.GRAY_700};
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-bottom: ${theme.METRICS.pixel(4)}px;
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.MD)}px;
		color: ${theme.COLORS.GRAY_600};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;

export const DateAndHourLabel = styled(Title)`
	${({ theme }) => css`
		margin-top: ${theme.METRICS.pixel(24)}px;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
	`}
`;

export const TagMealType = styled.View`
	${({ theme }) => css`
		width: ${theme.METRICS.pixel(144)}px;
		height: ${theme.METRICS.pixel(34)}px;
		flex-direction: row;
		align-items: center;
		gap: ${theme.METRICS.pixel(8)}px;
		border-radius: ${theme.METRICS.pixel(50)}px;
		background-color: ${theme.COLORS.GRAY_200};
		justify-content: center;
		margin-top: ${theme.METRICS.pixel(32)}px;
	`}
`;

export const TagMealTypeText = styled(DateAndHourLabel)`
	${({ theme }) => css`
		margin-top: 0px;
		margin-bottom: 0px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;

export const IndicatorTag = styled.View<{ mealType: ETypeOfMeal }>`
	${({ theme, mealType }) => css`
		width: ${theme.METRICS.pixel(8)}px;
		height: ${theme.METRICS.pixel(8)}px;
		border-radius: ${theme.METRICS.pixel(8 / 2)}px;
		background-color: ${mealType === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
			? theme.COLORS.RED_DARK
			: theme.COLORS.GREEN_DARK};
	`}
`;
