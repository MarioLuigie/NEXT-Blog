'use server'

import { CreatePostFieldsType } from '@/lib/types/zod'
import { connectToDB } from '@/lib/utils/database'
import PostModel from '../models/post.model'
import UserModel from '@/lib/models/user.model'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

//CREATE
export async function createPost(data: CreatePostFieldsType) {
	const { getUser } = getKindeServerSession()

	try {
		const user = await getUser()

		await connectToDB()

		const creator = await UserModel.findOne({ kindeId: user?.id })

		const newPost = { ...data, creator }

		const savedPost = await PostModel.create(newPost)

		const populatedPost = await PostModel.findById(savedPost._id)
			.populate('creator')
			.lean()

		console.log('POPULATED POST:', populatedPost)

		// Konwersja na prosty obiekt JSON, pozbywając się nietypowych struktur
		const simplePost = JSON.parse(JSON.stringify(populatedPost))

		return {
			success: true,
			data: {
				title: simplePost.title,
				article: simplePost.article,
				creator: simplePost.creator,
			},
		}
		throw new Error()
	} catch (err) {
		return {
			success: false,
			data: { title: null, article: null, creator: null, id: null },
			error: { message: 'Post has not been added' },
		}
	}
}
