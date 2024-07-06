'use server'

import { CreatePostFieldsType } from '@/lib/types/zod'
import { connectToDB } from '@/lib/utils/database'
import Post from '@/lib/models/post.model'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

//CREATE
export async function createPost(data: CreatePostFieldsType) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	
	try {
		await connectToDB()

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
