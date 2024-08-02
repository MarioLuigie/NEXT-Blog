import { Schema, models, model } from 'mongoose'
import { IUser } from '@/lib/models/user.model'

export interface IPost {
	title: string
	article: string
	creator: IUser
}

const PostSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title is required.'],
	},
	article: {
		type: String,
		required: [true, 'Content of article is required.'],
	},
	creator: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
})

const PostModel = models.Post || model('Post', PostSchema)

export default PostModel
