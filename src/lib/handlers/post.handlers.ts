//modules
import { UseFormReset } from 'react-hook-form'
//lib
import { CreatePostFieldsType } from '../types/zod'
import { IDataResult } from '@/lib/types/results'
import { createPost } from '@/lib/actions/post.actions'
import {
	toastSuccess,
	toastError,
	toastInfo,
	toastWarn,
} from '@/lib/utils/toasts'

//Interfejs tylko chwilowo, bo nie posiadam typu z modelu mongoosowego dla zapisywanej do DB daty
interface IData {
	title: string | null
	article: string | null
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

		const result: IDataResult<IData> = await createPost(data)

		if (result.error) {
			toastError(result.error)
		} else {
			toastSuccess({ message: 'Post added with successfully!' })
		}

		// toastInfo({ message: 'Post info' })
		// toastWarn({ message: 'Post warning!' })
	} catch (err) {
		console.error(err)
	}
}
