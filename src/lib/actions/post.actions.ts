'use server'

import { CreatePostFieldsType } from '@/lib/types/zod'

//CREATE
export async function createPost(data: CreatePostFieldsType) {
	try {
		return { success: true, data }
		throw new Error()
	} catch (err) {
		return {
			success: false,
			data: { title: null, article: null },
			error: { message: 'Post has not been added' },
		}
	}
}
