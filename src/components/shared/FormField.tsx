import { UseFormRegisterReturn } from 'react-hook-form'

export default function FormField({
	type,
	placeholder,
	label,
	register,
	errors,
}: {
	type: string
	placeholder: string
	label: string
	register: UseFormRegisterReturn
	errors: any
}) {
	return (
		<div className="gap-2 flex flex-col w-full">
			<label className="w-[200px] flex justify-start text-sm text-gray-600 font-semibold">
				{label}
			</label>
			<div className="relative">
				<input
					{...register}
					type={type}
					placeholder={placeholder}
					className="p-2 pl-4 border rounded-md w-full border-gray-400 focus:outline-none focus:ring-gray-700 focus:border-gray-700 input-no-placeholder"
				/>
				{errors && (
					<p className="text-red-400 text-xs w-full absolute top-[50px] left-[17px] z-40">
						{errors.message}
					</p>
				)}
			</div>
		</div>
	)
}
