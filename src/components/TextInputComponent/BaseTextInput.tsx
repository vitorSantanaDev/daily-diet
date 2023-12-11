import { TextInputProps } from "react-native";

import * as S from "./styles";

export type BaseTextInputProps = TextInputProps & {
	label?: string;
	errorMessage?: string;
};

export function BaseTextInput({
	label,
	errorMessage,
	...restTextInputProps
}: BaseTextInputProps) {
	return (
		<>
			{!!label && <S.Label>{label}</S.Label>}
			<S.TextInputElement
				thereIsAnError={!!errorMessage}
				{...restTextInputProps}
			/>
			{!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
		</>
	);
}
