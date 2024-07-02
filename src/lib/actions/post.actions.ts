'use server'

import { CreatePostFieldsType } from '@/lib/types/zod'

//CREATE
export async function createPost(data: CreatePostFieldsType) {
	try {
		throw new Error()
	} catch (err: any) {
		return { success: false, error: { message: 'Post has not been added' } }
	}
}
