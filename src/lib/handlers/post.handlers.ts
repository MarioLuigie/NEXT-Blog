//modules
import { UseFormReset } from 'react-hook-form'
//lib
import { CreatePostFieldsType } from '../types/zod'
import { createPost } from '@/lib/actions/post.actions'

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

	} catch (err) {
		console.error(err)
	}
}
