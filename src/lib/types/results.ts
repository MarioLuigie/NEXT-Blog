export interface IResult<T> {
	success: boolean
	data?: T
	error?: { message: string }
}

export interface IDataResult<T> {
	success: boolean
	data: T
	error?: { [key: string]: string }
}
