import { UseFormRegisterReturn, FieldError } from 'react-hook-form'

export default function FormField({
	type,
	placeholder,
	label,
	register,
	errors,
	textarea,
}: {
	type?: string
	placeholder: string
	label: string
	register: UseFormRegisterReturn
	errors: FieldError | undefined
	textarea?: true
}) {
	const commonClasses =
		'p-2 pl-4 border rounded-md w-full border-gray-400 focus:outline-none focus:ring-gray-700 focus:border-gray-700 input-no-placeholder placeholder:text-zinc-400 font-light'
	return (
		<div className="gap-2 flex flex-col w-full relative">
			<label className="w-[200px] flex justify-start text-sm text-gray-600 font-semibold">
				{label}
			</label>
			{textarea ? (
				<textarea
					{...register}
					placeholder={placeholder}
					className={commonClasses}
					style={{
						height: '100px',
						resize: 'none',
					}}
				/>
			) : (
				<input
					{...register}
					type={type}
					placeholder={placeholder}
					className={commonClasses}
				/>
			)}
			{errors && (
				<p className="text-red-400 text-xs w-full bottom-[-20px] absolute left-[17px] z-40">
					{errors.message}
				</p>
			)}
		</div>
	)
}
