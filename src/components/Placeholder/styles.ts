import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Description = styled.Text`
	${({ theme }) => css`
		text-align: center;
		color: ${theme.COLORS.GRAY_600};
		font-size: ${theme.METRICS.pixel(theme.FONT_SIZE.SM)}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;
