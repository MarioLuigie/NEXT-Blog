import Posts from '@/components/pages/Posts'

export const metadata = {
	title: 'Posts',
	description: 'Posts added from users',
}

export default async function Page() {
	const res = await fetch('https://dummyjson.com/posts?limit=10')

	if (!res.ok) {
		console.error('Data fetching unsuccessfull. Check app/api/posts/page.tsx')
		return
	}

	const { posts } = await res.json()

	return <Posts posts={posts} />
}
