import Post from '@/components/content/Post'
import { IPost } from '@/lib/types'

export default function Posts({ posts }: { posts: IPost[] }) {
	return (
		<ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</ul>
	)
}
