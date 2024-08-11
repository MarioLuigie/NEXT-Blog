//lib
import { IPost } from '@/lib/types'
import { getPosts } from '@/lib/actions/post.actions'
import { IDataResult } from '@/lib/types/results'
//components
import PostsListItem from '@/components/content/PostsListItem'

export default async function PostsListPage() {
	const { data }: IDataResult<IPost[]> = await getPosts()

	return (
		<ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
			{data.map((post: IPost) => (
				<PostsListItem key={post._id} post={post} />
			))}
		</ul>
	)
}

// import PostsListItem from '@/components/content/PostsListItem'
// import { IPost } from '@/lib/types'
// import { getPosts } from '@/lib/actions/post.actions'

// export default async function PostsList() {
// 	const res = await fetch('https://dummyjson.com/posts?limit=10')

// 	if (!res.ok) {
// 		console.error('Data fetching unsuccessfull. Check app/api/posts/page.tsx')
// 		return
// 	}

// 	const data = await res.json()

// 	return (
// 		<ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
// 			{data.posts.map((post: IPost) => (
// 				<PostsListItem key={post.id} post={post} />
// 			))}
// 		</ul>
// 	)
// }
