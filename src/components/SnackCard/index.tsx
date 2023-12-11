import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type SnackCardProps = TouchableOpacityProps & {
	type: S.MealTagType;
	time: string;
	mealName: string;
};

export function SnackCard({
	mealName,
	time,
	type,
	...restProps
}: SnackCardProps) {
	return (
		<S.Container {...restProps}>
			<S.Time>{time}</S.Time>
			<S.Separator />
			<S.Row>
				<S.MealName numberOfLines={1}>{mealName}</S.MealName>
				<S.MealTag type={type} />
			</S.Row>
		</S.Container>
	);
}
