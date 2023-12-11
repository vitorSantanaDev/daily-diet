import styled, { css } from "styled-components/native";

export type MealTypeOption = "YES" | "NO" | "UNSELECTED";

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
