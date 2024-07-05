import { toast, ToastOptions } from 'react-toastify'

const config: ToastOptions = {
	position: 'bottom-right',
	hideProgressBar: false,
	autoClose: 4000,
}

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

export function toastInfo(data: { message: string }) {
	const messages = Object.values(data)

	messages.forEach((msg) => {
		toast(<ToastContent title="Info" message={msg} />, {
			...config,
		})
	})
}

export function toastSuccess(data: { [key: string]: string }) {
	const messages = Object.values(data)

	messages.forEach((msg) => {
		toast.success(<ToastContent title="Success!" message={msg} />, {
			...config,
		})
	})
}

export function toastError(
	data: { [key: string]: string } | string | string[]
) {
	let messages

	if (typeof data === 'string') {
		messages = [data]
	} else if (Array.isArray(data)) {
		messages = data
	} else if (Object.keys(data).length > 0) {
		messages = Object.values(data)
	}

	if (messages) {
		messages.forEach((msg) => {
			toast.error(<ToastContent title="Error!" message={msg} />, {
				...config,
			})
		})
	}
}

export function toastWarn(data: { message: string }) {
	const messages = Object.values(data)

	messages.forEach((msg) => {
		toast.warn(<ToastContent title="Warning!" message={msg} />, {
			...config,
		})
	})
}

// toast.success(toastContent, {
// 	position: "top-right",
// 	autoClose: 5000,
// 	hideProgressBar: false,
// 	closeOnClick: true,
// 	pauseOnHover: true,
// 	draggable: true,
// 	progress: undefined,
// 	className: 'custom-toast',
// });

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

// export function toastSuccess({ message }: { message: string | string[] }) {
// 	const messages = Array.isArray(message) ? message : [message]

// 	messages.forEach((msg) => {
// 		toast.success(<ToastContent title="Success!" message={msg} />, {
// 			position: position,
// 		})
// 	})
// }
