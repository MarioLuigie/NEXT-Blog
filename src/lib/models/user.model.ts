import { Schema, models, model } from 'mongoose'

export interface IUser {
	_id: string
	kindeId: string
	username: string
	email: string
	firstName?: string
	lastName?: string
	image?: string
}

const UserSchema = new Schema({
	kindeId: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: [true, 'User name is required.'],
		match: [
			/^(?=.{2,20}$)[a-zA-Z0-9._]+$/,
			'Username invalid, it should contain 2-20 alphanumeric letters and be unique!',
		],
	},
	email: {
		type: String,
		required: [true, 'Email is required.'],
		unique: [true, 'Email already exists!'],
	},
  firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	image: {
		type: String,
	},
})

const User = models.User || model('User', UserSchema)

export default User
