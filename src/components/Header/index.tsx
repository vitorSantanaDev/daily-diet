import Logo from "@assets/images/logo.svg";

import * as S from "./styles";

export function Header() {
	return (
		<S.Container>
			<Logo />
			<S.UserPhoto />
		</S.Container>
	);
}
