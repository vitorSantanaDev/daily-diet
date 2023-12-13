import styled, { css } from "styled-components/native";

export const Meals = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.MD)}px;
		margin-bottom: ${theme.METRICS.pixel(12)}px;
	`}
`;

export const SectionHeader = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.LG)}px;
		/* margin-bottom: ${theme.METRICS.pixel(8)}px; */
		color: ${theme.COLORS.GRAY_700};
	`}
`;
