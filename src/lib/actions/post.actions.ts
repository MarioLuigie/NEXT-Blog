'use server'

//modules
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import xss from 'xss'
//lib
import { connectToDB } from '@/lib/utils/database'
import PostModel from '@/lib/models/post.model'
import UserModel from '@/lib/models/user.model'
import { PostFieldsType } from '@/lib/types/zod'
import { deepClone } from '@/lib/utils'
import { IDataResult } from '@/lib/types/results'
import { IPost } from '@/lib/types'

// CREATE
export async function createPost(
	data: PostFieldsType
): Promise<IDataResult<IPost>> {
	const { getUser } = getKindeServerSession()

	try {
		const user = await getUser()

		await connectToDB()

		const creator = await UserModel.findOne({ kindeId: user?.id })

		// Data sanitization
		const sanitizedTitle = xss(data.title, {
			whiteList: {}, // Brak dozwolonych tagów HTML
			stripIgnoreTag: true, // Usuń tagi, które nie są dozwolone
		})

		const sanitizedArticle = xss(data.article, {
			whiteList: {}, // Brak dozwolonych tagów HTML
			stripIgnoreTag: true, // Usuń tagi, które nie są dozwolone
		})

		const newPost = {
			...data,
			creator,
			title: sanitizedTitle,
			article: sanitizedArticle,
		}

		const savedPost = await PostModel.create(newPost)

		const populatedPost = await PostModel.findById(savedPost._id)
			.populate('creator')
			.lean()

		console.log('POPULATED POST:', populatedPost)

		// Konwersja na prosty obiekt JSON, pozbywając się nietypowych struktur
		//Uzyj naszego deepClone albo NextResponse
		const res = deepClone(populatedPost)

		revalidatePath('/posts')

		return {
			success: true,
			data: {
				title: res.title,
				article: res.article,
				creator: res.creator,
				_id: res._id,
			},
		}
		// throw new Error()
	} catch (err) {
		return {
			success: false,
			data: { title: null, article: null, creator: null, _id: null },
			error: { message: 'Post has not been added' },
		}
	}
}

// READ
export async function getPosts(): Promise<IDataResult<IPost[]>> {
	try {
		await connectToDB()
		// Spłaszczam dokumenty mongoose do prostych js objects, moge to zrobić, bo nie modyfikuje ich i korzystam z trasy GET a nie PUT, PATCH, POST
		// Zyskuje mniejsza wage elementów
		const posts = await PostModel.find().populate('creator').lean()

		const res = deepClone(posts).reverse()

		return {
			success: true,
			data: [...res],
		}
	} catch (err) {
		return {
			success: false,
			data: [],
			error: { message: 'An error occurred' },
		}
	}
}

export async function getPost(id: string): Promise<IDataResult<IPost>> {
	try {
		await connectToDB()

		const post = await PostModel.findById(id).populate('creator').lean()

		const res = deepClone(post)

		return {
			success: true,
			data: {
				title: res.title,
				article: res.article,
				creator: res.creator,
				_id: res._id,
			},
		}
	} catch (err) {
		return {
			success: false,
			data: { title: null, article: null, creator: null, _id: null },
			error: { message: 'An error occurred' },
		}
	}
}

// UPDATE
export async function updatePost(
	data: PostFieldsType,
	id: string | null
): Promise<IDataResult<IPost>> {
	try {
		if (!id) {
			return {
				success: false,
				data: { title: null, article: null, creator: null, _id: null },
				error: { message: 'Invalid ID' },
			}
		}

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return {
				success: false,
				data: { title: null, article: null, creator: null, _id: null },
				error: { message: 'Invalid ObjectId format' },
			}
		}

		await connectToDB()

		const postToUpdate = {
			title: data.title,
			article: data.article,
		}

		const updatedPost = await PostModel.findByIdAndUpdate(
			id,
			postToUpdate
		).populate('creator')

		if (!updatedPost) {
			return {
				success: false,
				data: { title: null, article: null, creator: null, _id: null },
				error: { message: 'Post to update not found' },
			}
		}

		const res = deepClone(updatedPost)

		revalidatePath('/posts')

		return {
			success: true,
			data: {
				title: res.title,
				article: res.article,
				creator: res.creator,
				_id: res._id,
			},
		}
	} catch (err) {
		return {
			success: false,
			data: { title: null, article: null, creator: null, _id: null },
			error: { message: 'An error occurred' },
		}
	}
}

// DELETE
export async function deletePost(id: string): Promise<IDataResult<IPost>> {
	try {
		if (!id) {
			return {
				success: false,
				data: { title: null, article: null, creator: null, _id: null },
				error: { message: 'Invalid ID' },
			}
		}

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return {
				success: false,
				data: { title: null, article: null, creator: null, _id: null },
				error: { message: 'Invalid ObjectId format' },
			}
		}

		await connectToDB()

		const deletedPost = await PostModel.findByIdAndDelete(id).populate(
			'creator'
		)

		console.log('###', deletedPost)

		if (!deletedPost) {
			return {
				success: false,
				data: { title: null, article: null, creator: null, _id: null },
				error: { message: 'Post to delete not found' },
			}
		}

		const res = deepClone(deletedPost)

		console.log('Post deleted from Data Base', res)

		revalidatePath('/posts', 'layout')

		return {
			success: true,
			data: {
				title: res.title,
				article: res.article,
				creator: res.creator,
				_id: res._id,
			},
		}
	} catch (err) {
		return {
			success: false,
			data: { title: null, article: null, creator: null, _id: null },
			error: { message: 'An error occurred' },
		}
	}
}
