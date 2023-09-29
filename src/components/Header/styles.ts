import { Image } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		padding-top: ${theme.METRICS.pixel(8)}px;
		padding-left: ${theme.METRICS.pixel(24)}px;
		padding-right: ${theme.METRICS.pixel(24)}px;
	`}
`;

export const UserPhoto = styled(Image).attrs(({ theme }) => ({
	source: {
		uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	},
	width: theme.METRICS.pixel(40),
	height: theme.METRICS.pixel(40),
}))`
	border-width: 2px;
	border-radius: ${({ theme }) => theme.METRICS.pixel(40 / 2)}px;
	border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
