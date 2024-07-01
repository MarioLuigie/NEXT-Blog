export default function Button({
	label,
	onClick,
	type,
	disabled,
	outline,
}: {
	label: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	outline?: true
}) {
	return (
		<div className="flex-center">
			<button
				disabled={disabled}
				type={type}
				className={
					outline
						? `flex-center p-3 w-full bg-zinc-100 border border-zinc-600 text-zinc-900 rounded-md`
						: `flex-center p-3 w-full ${
								!disabled ? 'bg-zinc-900' : 'bg-zinc-400'
						  } text-white rounded-md shadow-xl`
				}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	)
}
