import { ETypeOfMeal } from "@interfaces/snack.interface";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Description = styled.Text`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.MD)}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_700};
	`}
`;

export const Title = styled.Text<{ type: ETypeOfMeal }>`
	${({ theme, type }) => css`
		text-align: center;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.XL)}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${type === ETypeOfMeal.MEAL_OUTSIDE_THE_DIET
			? theme.COLORS.RED_DARK
			: theme.COLORS.GREEN_DARK};
		margin-bottom: ${theme.METRICS.pixel(12)}px;
	`}
`;
