'use client'
//modules
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPostSchema, CreatePostFieldsType } from '@/lib/types/zod'
import FormField from '@/components/shared/FormField'
import Button from '@/components/shared/Button'

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

	const onSubmit: SubmitHandler<CreatePostFieldsType> = async (
		data: CreatePostFieldsType
	) => {
		try {
			const res = await new Promise((resolve) => {
				setTimeout(resolve, 2000)
			})

      reset()
		} catch (err) {}
	}

	const handleResetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		reset()
	}

	console.log('GET VALUES:', getValues())

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-20 flex flex-col gap-8">
				<FormField
					register={register('title')}
					errors={errors.title}
					label="Title"
					type="text"
					placeholder="Enter title for new article"
				/>
				<FormField
					register={register('article')}
					errors={errors.article}
					label="Article"
					placeholder="Enter new article text"
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
					onClick={handleResetForm}
				/>
			</div>
		</form>
	)
}
