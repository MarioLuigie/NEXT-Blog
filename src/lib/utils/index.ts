// Short text
export const truncateText = (text: string | null, end: number) => {
	if(text !== null) {
		return `${text.slice(0, end)}...`
	} else {
		return
	}
}

// Deep clone
export function deepClone(obj: any) {
	return JSON.parse(JSON.stringify(obj))
}


