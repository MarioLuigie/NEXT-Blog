export interface IReactions {
	[key: string]: number
}

export interface IPost {
	id: number
	title: string
	body: string
	tags: string[]
	reactions: IReactions
	views: number
	userId: number
}
