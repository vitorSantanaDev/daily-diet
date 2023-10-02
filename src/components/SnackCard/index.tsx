import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import { useMemo } from "react";

type SnackCardProps = TouchableOpacityProps & {
	type: S.MealTagType;
	createdAt: string;
	mealName: string;
};

export function SnackCard({
	mealName,
	createdAt,
	type,
	...restProps
}: SnackCardProps) {
	const time = useMemo(() => {
		const date = new Date(createdAt);
		const hours = date.getHours();
		const minutes = date.getMinutes();

		const hour = hours >= 10 ? hours : `0${hours}`;
		const minute = minutes >= 10 ? minutes : `0${minutes}`;

		return `${hour}:${minute}`;
	}, [createdAt]);

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
