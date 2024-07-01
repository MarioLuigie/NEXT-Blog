import Post from '@/components/content/Post'

export default async function Page({ params }: { params: { post: string } }) {
	const res = await fetch(`https://dummyjson.com/posts/${params.post}`)

	if (!res.ok) {
		console.error('Problem with fetching post')
		return
	}

	const data = await res.json()
	return <Post data={data} />
}
