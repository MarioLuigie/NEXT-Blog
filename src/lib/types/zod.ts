import { z } from 'zod'

export const PostSchema = z.object({
	title: z
		.string()
		.min(5, { message: 'Write min 5 characters' })
		.max(40, { message: 'Write max 40 characters' }),
	article: z
		.string()
		.min(40, { message: 'Write min 40 characters' })
		.max(550, { message: 'Write max 350 characters' }),
})

export type PostFieldsType = z.infer<typeof PostSchema>
