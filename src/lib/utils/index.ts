export const truncateText = (text: string, end: number) => {
	return `${text.slice(0, end)}...`
}
