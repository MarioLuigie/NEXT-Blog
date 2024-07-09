import { Schema, models, model } from 'mongoose'

export interface IUser {
	_id: string
	kindeId: string
	username: string | null
	email: string
	firstName?: string
	lastName?: string
	picture?: string
}

const UserSchema = new Schema({
	kindeId: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		default: null,
		unique: true,
		sparse: true,//tworzy rzadki indeks, który umożliwia przechowywanie wielu dokumentów z username ustawionym na null
		required: false,
	},
	email: {
		type: String,
		required: [true, 'Email is required.'],
		unique: true,
	},
  firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	picture: {
		type: String,
	},
})

const UserModel = models.User || model('User', UserSchema)

export default UserModel
