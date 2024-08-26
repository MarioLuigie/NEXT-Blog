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
	_id: string | null
	title: string | null
	article: string | null
	creator: any | null
	createdAt: string | null
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
