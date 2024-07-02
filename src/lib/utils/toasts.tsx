import { toast } from 'react-toastify'

const position = 'bottom-right'

const ToastContent = ({
	title,
	message,
}: {
	title?: string
	message: string | string[]
}): JSX.Element => {
	return (
		<div>
			<strong>{title}</strong>
			<p>{message}</p>
		</div>
	)
}

export function toastInfo({ message }: { message: string | string[] }) {
	const messages = Array.isArray(message) ? message : [message]

	messages.forEach((msg) => {
		toast(<ToastContent title="Info" message={msg} />, {
			position: position,
		})
	})
}

export function toastSuccess({ message }: { message: string | string[] }) {
	const messages = Array.isArray(message) ? message : [message]

	messages.forEach((msg) => {
		toast.success(<ToastContent title="Success!" message={msg} />, {
			position: position,
		})
	})
}

export function toastError({ message }: { message: string | string[] }) {
	const messages = Array.isArray(message) ? message : [message]

	messages.forEach((msg) => {
		toast.error(<ToastContent title="Error!" message={msg} />, {
			position: position,
		})
	})
}

export function toastWarn({ message }: { message: string | string[] }) {
	const messages = Array.isArray(message) ? message : [message]

	messages.forEach((msg) => {
		toast.warn(<ToastContent title="Warning!" message={msg} />, {
			position: position,
		})
	})
}

// export function appToast(message: string) {
// 	toast(message, { position: position })
// }

// export function toastSuccess(message: string) {
// 	toast.success(message, { position: position })
// }

// export function toastError(message: string) {
// 	toast.error(message, { position: position })
// }

// export function toastWarn(message: string) {
// 	toast.warn(message, { position: position })
// }
