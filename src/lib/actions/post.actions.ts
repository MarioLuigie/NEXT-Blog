'use server'

import { revalidatePath } from 'next/cache'
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
		//Uzyj deepClone albo NextResponse
		const simplePost = JSON.parse(JSON.stringify(populatedPost))

		revalidatePath('/posts')

		return {
			success: true,
			data: {
				title: simplePost.title,
				article: simplePost.article,
				creator: simplePost.creator,
				id: simplePost._id,
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

export async function getPosts() {
	try {
		await connectToDB()

		// Spłaszczam dokumenty mongoose do prostych js objects, moge to zrobić, bo nie modyfikuje ich i korzystam z trasy GET a nie PUT, PATCH, POST
		// Zyskuje mniejsza wage elementów
		const posts = await PostModel.find().populate('creator').lean()

		const postsList = JSON.parse(JSON.stringify(posts))

		return {
			success: true,
			data: [...postsList],
		}

	} catch (err) {
		return {
			success: false,
			data: [],
			error: { message: 'An error occurred' },
		}
	}
}

export async function getPost(id: string) {
	try {
		await connectToDB()

		const post = await PostModel.findById(id).populate('creator').lean()

		const clonePost = JSON.parse(JSON.stringify(post))

		return {
			success: true,
			data: {
				title: clonePost.title,
				article: clonePost.article,
				creator: clonePost.creator,
				id: clonePost._id,
			},
		}
		
	} catch (err) {
		return {
			success: false,
			data: {},
			error: { message: 'An error occurred' },
		}
	}
}
