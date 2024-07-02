//modules
import { UseFormReset } from 'react-hook-form'
//lib
import { CreatePostFieldsType } from '../types/zod'
import { createPost } from '@/lib/actions/post.actions'
import {
	toastSuccess,
	toastError,
	toastWarn,
	toastInfo,
} from '@/lib/utils/toasts'

export const handleResetForm =
	(reset: UseFormReset<CreatePostFieldsType>) =>
	(e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		reset()
	}

export const handleCreatePost = async (data: CreatePostFieldsType) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const result = await createPost(data)

		toastSuccess({ message: 'Article added with successfully!' })
		toastInfo({ message: 'Article added with successfully!' })
		// toastError({ message: 'Something went wrong. Try again later.' })
		toastError(result.error)
		// toastWarn('Something went wrong. Try again later.')
	} catch (err) {
		console.error(err)
	}
}
