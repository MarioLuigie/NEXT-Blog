//POST
// export interface IReactions {
// 	[key: string]: number
// }

// export interface IPost {
// 	id: number
// 	title: string
// 	body: string
// 	tags: string[]
// 	reactions: IReactions
// 	views: number
// 	userId: number
// }

//POST
export interface IPost {
	_id: string
	title: string
	article: string
	creator: any
}

//USER
export type CreateUserData = {
	kindeId: string
	username: string
	email: string
	firstName: string
	lastName: string
	picture: string
}

export type UpdateUserData = {
	username: string
	firstName: string
	lastName: string
	picture: string
}
