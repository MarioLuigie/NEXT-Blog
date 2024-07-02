//modules
import { UseFormReset } from 'react-hook-form'
//lib
import { CreatePostFieldsType } from '../types/zod'
import { IResult } from '@/lib/types/results'
import { createPost } from '@/lib/actions/post.actions'
import { toastSuccess, toastError } from '@/lib/utils/toasts'

//Interfejs tylko chwilowo, bo nie posiadam typu z modelu mongoosowego dla zapisywanej do DB daty
interface IData {
	title: string
	article: string
}

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

		const result: IResult<IData> = await createPost(data)

		if (result.error) {
			toastError(result.error)
		} else if (result.data) {
			toastSuccess({ message: 'Post added with successfully!' })
		}
	} catch (err) {
		console.error(err)
	}
}
