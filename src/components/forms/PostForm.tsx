'use client'
//modules
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
//lib
import { createPostSchema, CreatePostFieldsType } from '@/lib/types/zod'
//components
import FormField from '@/components/shared/FormField'
import Button from '@/components/shared/Button'
//handlers
import { handleResetForm, handleCreatePost } from '@/lib/handlers/post.handlers'
//modules
import { useRouter } from 'next/navigation'

export default function CreatePostForm() {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors, isSubmitting },
	} = useForm<CreatePostFieldsType>({
		resolver: zodResolver(createPostSchema),
	})

	const router = useRouter()

	const onSubmit: SubmitHandler<CreatePostFieldsType> = async (
		data: CreatePostFieldsType
	) => {
		try {
			const result = await handleCreatePost(data)

			if (!result) {
				reset()
				router.push('/posts')
			} else {
				console.error(result.message)
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-20 flex flex-col gap-8">
				<FormField
					register={register('title')}
					errors={errors.title}
					label="Title"
					type="text"
					placeholder="Enter title for new article..."
				/>
				<FormField
					register={register('article')}
					errors={errors.article}
					label="Article"
					placeholder="Enter new article text..."
					textarea
				/>
			</div>
			<div className="flex flex-col gap-5">
				<Button
					label={isSubmitting ? 'Submitting...' : 'Submit'}
					type="submit"
					disabled={isSubmitting}
				/>
				<Button
					label={'Clear'}
					type="reset"
					outline
					onClick={handleResetForm(reset)}
				/>
			</div>
		</form>
	)
}
