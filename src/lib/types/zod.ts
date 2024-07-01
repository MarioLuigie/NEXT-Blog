import { z } from 'zod'

export const createPostSchema = z.object({
	title: z
		.string()
		.min(5, { message: 'Write min 5 characters' })
		.max(40, { message: 'Write max 40 characters' }),
	article: z
		.string()
		.min(40, { message: 'Write min 40 characters' })
		.max(350, { message: 'Write max 350 characters' }),
})

export type CreatePostFieldsType = z.infer<typeof createPostSchema>
