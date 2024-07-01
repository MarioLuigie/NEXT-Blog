import PostsListItem from '@/components/content/PostsListItem'
import { IPost } from '@/lib/types'

export default function PostsList({ posts }: { posts: IPost[] }) {
	return (
		<ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
			{posts.map((post) => (
				<PostsListItem key={post.id} post={post} />
			))}
		</ul>
	)
}
