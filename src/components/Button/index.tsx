import { ReactElement } from "react";
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps, View } from "react-native";

import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
	label: string;
	type?: S.ButtonStyleType;
	icon?: ReactElement;
};

export function Button({
	icon,
	label,
	type = "PRIMARY",
	disabled,
	...restProps
}: ButtonProps) {
	const { METRICS } = useTheme();
	return (
		<S.Container disabled={disabled} buttonType={type} {...restProps}>
			{!!icon && <View style={{ marginRight: METRICS.pixel(12) }}>{icon}</View>}
			<S.ButtonText disabled={disabled} buttonType={type}>
				{label}
			</S.ButtonText>
		</S.Container>
	);
}
