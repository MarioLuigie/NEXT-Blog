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
		formState: { errors, isSubmitting },
	} = useForm<CreatePostFieldsType>({
		resolver: zodResolver(createPostSchema),
	})

	const onSubmit: SubmitHandler<CreatePostFieldsType> = async (
		data: CreatePostFieldsType
	) => {
		try {
		} catch (err) {}
	}

	const handleResetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-10 rounded-md shadow-xl flex flex-col gap-10 max-w-[600px] min-w-[400px]"
		>
			<div className="pb-10">
				<FormField
					register={register('title')}
					errors={errors.title}
					label="Title"
					type="text"
					placeholder="Enter title"
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
