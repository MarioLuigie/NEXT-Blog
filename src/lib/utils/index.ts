// Short text
export const truncateText = (text: string, end: number) => {
	return `${text.slice(0, end)}...`
}

// Deep clone
export function deepClone(obj: any) {
	return JSON.parse(JSON.stringify(obj))
}


