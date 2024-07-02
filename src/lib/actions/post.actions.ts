'use server'

import { CreatePostFieldsType } from '@/lib/types/zod'

//CREATE
export async function createPost(data: CreatePostFieldsType) {
	try {
		return { success: true, data }
		throw new Error()
	} catch (err) {
		return { success: false, error: { message: 'Post has not been added' } }
	}
}
