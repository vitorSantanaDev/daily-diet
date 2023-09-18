import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowUp } from "phosphor-react-native";

import * as S from "./styles";

type DietPerformanceProps = TouchableOpacityProps & {
	percentage: number;
	description: string;
	backgroundColor?: S.DietPerformanceBackgroundType;
};

export function DietPerformance({
	percentage,
	description,
	backgroundColor = "GREEN_LIGHT",
	...restProps
}: DietPerformanceProps) {
	const { COLORS, METRICS } = useTheme();
	return (
		<S.Container backgroundColor={backgroundColor} {...restProps}>
			<S.IconWrapper>
				<ArrowUp
					size={METRICS.pixel(24)}
					style={{ transform: [{ rotate: "45deg" }] }}
					color={COLORS.GREEN_DARK}
				/>
			</S.IconWrapper>
			<S.PercentageText>
				{new Intl.NumberFormat("pt-BR").format(percentage)}%
			</S.PercentageText>
			<S.Description>{description}</S.Description>
		</S.Container>
	);
}
