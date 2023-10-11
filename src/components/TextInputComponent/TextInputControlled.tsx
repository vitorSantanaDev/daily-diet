import { Control, Controller, FieldValues } from "react-hook-form";
import { BaseTextInput, BaseTextInputProps } from "./BaseTextInput";

export type TextInputControlledProps = {
	control: Control<FieldValues>;
	name: string;
} & BaseTextInputProps;

export function TextInputControlled({
	name,
	control,
	...restBaseTextInputProps
}: TextInputControlledProps) {
	return (
		<Controller
			name={name}
			rules={{
				required: true,
			}}
			control={control}
			render={({
				field: { onChange, onBlur, value },
				formState: { errors },
			}) => (
				<BaseTextInput
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					errorMessage={errors[name]?.message?.toString()}
					{...restBaseTextInputProps}
				/>
			)}
		/>
	);
}
