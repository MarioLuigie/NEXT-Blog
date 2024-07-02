import { toast } from 'react-toastify'

const position = 'bottom-right'

export function appToast(message: string) {
  toast(message, { position: position})
}

export function toastSuccess(message: string) {
	toast.success(message, { position: position})
}

export function toastError(message: string) {
	toast.error(message, { position: position})
}