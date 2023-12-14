import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowUp } from "phosphor-react-native";

import * as S from "./styles";

type DietPerformanceProps = TouchableOpacityProps & {
	percentage: number;
	description: string;
};

export function DietPerformance({
	percentage,
	description,
	...restProps
}: DietPerformanceProps) {
	const { COLORS, METRICS } = useTheme();
	return (
		<S.Container
			backgroundColor={
				percentage <= 0 || percentage <= 55 ? "RED_LIGHT" : "GREEN_LIGHT"
			}
			{...restProps}
		>
			<S.IconWrapper>
				<ArrowUp
					size={METRICS.pixel(24)}
					style={{ transform: [{ rotate: "45deg" }] }}
					color={
						percentage <= 0 || percentage <= 55
							? COLORS.RED_DARK
							: COLORS.GREEN_DARK
					}
				/>
			</S.IconWrapper>
			<S.PercentageText>
				{new Intl.NumberFormat("pt-BR").format(percentage)}%
			</S.PercentageText>
			<S.Description>{description}</S.Description>
		</S.Container>
	);
}
