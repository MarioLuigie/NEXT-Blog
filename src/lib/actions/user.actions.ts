'use server'

import { connectToDB } from '@/lib/utils/database'
import { CreateUserData, UpdateUserData } from '@/lib/types'
import UserModel, { IUser } from '@/lib/models/user.model'
import { NextResponse } from 'next/server'
import { handleError } from '@/lib/utils/dev'
import { deepClone } from '@/lib/utils'

//CREATE
export async function createUser(user: CreateUserData) {
	try {
		await connectToDB()

		const createdUser = await UserModel.create(user)

		const res = deepClone(createdUser)

		return res
	} catch (error) {
		handleError(error)
	}
}

// //UPDATE
// export async function updateUser(kindeId: string, user: UpdateUserData) {
// 	try {
// 		await connectToDB()

// 		const updatedUser = await UserModel.findOneAndUpdate({ kindeId }, user, {
// 			new: true,
// 		})

// 		if (!updatedUser) throw new Error('User update failed')

// 		return NextResponse.json(updatedUser)
// 	} catch (error) {
// 		handleError(error)
// 	}
// }

// //DELETE
// export async function deleteUser(kindeId: string) {
// 	try {
// 		await connectToDB()

// 		const userToDelete = await UserModel.findOne({ kindeId })

// 		if (!userToDelete) {
// 			throw new Error('User not found')
// 		}

// 		const deletedUser = await UserModel.findByIdAndDelete(userToDelete._id)

// 		return deletedUser ? NextResponse.json(deletedUser) : null
// 	} catch (error) {
// 		handleError(error)
// 	}
// }
