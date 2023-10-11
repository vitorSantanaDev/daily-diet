import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const TextInputElement = styled(TextInput)<{ thereIsAnError: boolean }>`
	${({ theme, thereIsAnError }) => css`
		width: 100%;
		color: ${theme.COLORS.GRAY_700};
		padding: ${theme.METRICS.pixel(12)}px;
		border-color: ${thereIsAnError
			? theme.COLORS.RED_DARK
			: theme.COLORS.GRAY_300};
		border-width: ${theme.METRICS.pixel(1)}px;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.MD)}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		border-radius: ${theme.METRICS.pixel(theme.BORDER_RADIUS.BUTTON)}px;
	`}
`;

export const Label = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_600};
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-bottom: ${theme.METRICS.pixel(4)}px;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
	`}
`;

export const ErrorMessage = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.RED_DARK};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		margin-top: ${theme.METRICS.pixel(4)}px;
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
	`}
`;
