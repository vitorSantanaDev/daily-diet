import * as S from "./styles";

type PlaceholderProps = {
	description: string;
};

export function Placeholder({ description }: PlaceholderProps) {
	return (
		<S.Wrapper>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
}
