import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleType = "OUTLINE" | "PRIMARY";
export type ButtonStyleProps = {
	buttonType: ButtonStyleType;
};

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
	${({ theme, buttonType }) => css`
		width: 100%;
		flex-direction: row;
		background-color: ${buttonType === "PRIMARY"
			? theme.COLORS.GRAY_700
			: "transparent"};
		border-radius: ${theme.METRICS.pixel(theme.BORDER_RADIUS.BUTTON)}px;
		min-height: ${theme.METRICS.pixel(50)}px;
		align-items: center;
		justify-content: center;

		${buttonType !== "PRIMARY" &&
		css`
			border-width: 1px;
			border-color: ${theme.COLORS.GRAY_700};
		`}
	`}
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
	${({ theme, buttonType }) => css`
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${buttonType === "PRIMARY"
			? theme.COLORS.WHITE
			: theme.COLORS.GRAY_700};
	`}
`;
