'use client'
//modules
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
//lib
import { PostSchema, PostFieldsType } from '@/lib/types/zod'
import {
	handleResetForm,
	handleCreatePost,
	handleUpdatePost,
} from '@/lib/handlers/post.handlers'
import { IPost } from '@/lib/models/post.model'
//components
import FormField from '@/components/shared/FormField'
import Button from '@/components/shared/Button'

export default function PostForm({
	post,
	isPostPage,
}: {
	post?: IPost
	isPostPage?: boolean
}) {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors, isSubmitting },
	} = useForm<PostFieldsType>({
		resolver: zodResolver(PostSchema),
		defaultValues: {
			title: post?.title || '',
			article: post?.article || '',
		},
	})

	const router = useRouter()

	const url = isPostPage ? `/posts/${post?._id}` : '/posts'

	const onSubmit: SubmitHandler<PostFieldsType> = async (
		data: PostFieldsType
	) => {
		try {
			if (post) {
				const result = await handleUpdatePost(data, post._id)
				if (!result) {
					reset(data)
					router.push(url)
				} else {
					console.error(result.message)
				}
			} else {
				const result = await handleCreatePost(data)
				if (!result) {
					reset()
					router.push(url)
				} else {
					console.error(result.message)
				}
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
					label={
						isSubmitting
							? post
								? 'Updating...'
								: 'Creating...'
							: post
							? 'Update'
							: 'Create'
					}
					type="submit"
					disabled={isSubmitting}
				/>
				<Button
					label={post ? 'Cancel' : 'Clear'}
					type={post ? 'button' : 'reset'}
					outline
					onClick={post ? () => router.push(url) : handleResetForm(reset)}
				/>
			</div>

			{/* <div className="flex flex-col gap-5">
				{post ? (
					<Button
						label={isSubmitting ? 'Updating...' : 'Update'}
						type="submit"
						disabled={isSubmitting}
					/>
				) : (
					<Button
						label={isSubmitting ? 'Creating...' : 'Create'}
						type="submit"
						disabled={isSubmitting}
					/>
				)}
				{post ? (
					<Button
						label={'Cancel'}
						type="button"
						outline
						onClick={() => router.push(url)}
					/>
				) : (
					<Button
						label={'Clear'}
						type="reset"
						outline
						onClick={handleResetForm(reset)}
					/>
				)}
			</div> */}
		</form>
	)
}
