import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
	width: 100%;
	height: 100%;
	z-index: 1;
	position: absolute;
	background-color: rgba(16, 17, 20, 0.8);
	padding: 0px ${({ theme }) => theme.METRICS.pixel(24)}px;

	align-items: center;
	justify-content: center;
`;

export const Content = styled.View`
	${({ theme }) => css`
		width: 100%;
		align-items: center;
		justify-content: center;
		background-color: ${theme.COLORS.WHITE};
		border-radius: ${theme.METRICS.pixel(theme.BORDER_RADIUS.CARD)}px;
		padding: ${({ theme }) => theme.METRICS.pixel(32)}px;
	`}
`;

export const Title = styled.Text`
	${({ theme }) => css`
		text-align: center;
		max-width: ${theme.METRICS.pixel(279)}px;
		color: ${theme.COLORS.GRAY_600};
		font-size: ${theme.FONT_SIZE.LG}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-bottom: ${theme.METRICS.pixel(32)}px;
	`}
`;

export const ActionsWrapper = styled.View`
	width: 100%;
	align-items: center;
	flex-direction: row;
	gap: ${({ theme }) => theme.METRICS.pixel(8)}px;
`;
