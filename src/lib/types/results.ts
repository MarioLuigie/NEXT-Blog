export interface IResult<T> {
	success: boolean
	data?: T
	error?: { [key: string]: string | string[] }
}

export interface IDataResult<T> {
	success: boolean
	data: T
	error?: { [key: string]: string }
}

// export interface IData {
// 	title: string | null
// 	article: string | null
// 	creator: any | null
// 	_id: string | null
// }
