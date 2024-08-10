//modules
import { UseFormReset } from 'react-hook-form'
//lib
import { IPost } from '@/lib/types'
import { CreatePostFieldsType } from '../types/zod'
import { IDataResult } from '@/lib/types/results'
import { createPost, deletePost } from '@/lib/actions/post.actions'
import {
	toastSuccess,
	toastError,
	toastInfo,
	toastWarn,
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

		const result: IDataResult<IPost> = await createPost(data)

		if (result.error) {
			toastError(result.error)
			return result.error
		} else {
			toastSuccess({ message: 'Post added with successfully!' })
			console.log('POST DATA result:', result)
			return null
		}

		// toastInfo({ message: 'Post info' })
		// toastWarn({ message: 'Post warning!' })
	} catch (err) {
		console.error(err)
	}
}

export const handleEditPost = (data: IPost) => () => {
	console.log('Post post prepared do edit', data._id)
}

export const handleDeletePost = async (data: IPost) => {
	try {
		if (!data._id) {
			toastError({ message: 'Invalid post ID' })
			return
		}

		console.log('Post prepared to delete', data._id)

		const result: IDataResult<IPost> = await deletePost(data._id)

		if (result.error) {
			console.error('Error deleting post:', result.error)
			toastError(result.error)
		} else {
			toastSuccess({ message: 'Post deleted successfully!' })
		}
	} catch (err) {
		console.error('Unexpected error during post deletion:', err)
		toastError({ message: 'An unexpected error occurred' })
	}
}

export const handleHidePost = () => {
	console.log('Post hidden')
}

export const handleReportPost = () => {
	console.log('Post reported')
}
