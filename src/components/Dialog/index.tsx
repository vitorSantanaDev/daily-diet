import { Button } from "@components/Button";
import { Modal } from "react-native";

import * as S from "./styles";

type DialogProps = {
	title: string;
	isVisible: boolean;
	onClose: () => void;
	onActionConfirm: () => void;
};

export function Dialog({
	title,
	isVisible,
	onClose,
	onActionConfirm,
}: DialogProps) {
	return (
		<Modal animationType="fade" transparent visible={isVisible}>
			<S.Wrapper>
				<S.Content>
					<S.Title>{title}</S.Title>
					<S.ActionsWrapper>
						<Button
							style={{ flex: 1 }}
							label="Cancelar"
							type="OUTLINE"
							onPress={onClose}
						/>
						<Button
							style={{ flex: 1 }}
							label="Sim, excluir"
							type="PRIMARY"
							onPress={onActionConfirm}
						/>
					</S.ActionsWrapper>
				</S.Content>
			</S.Wrapper>
		</Modal>
	);
}
