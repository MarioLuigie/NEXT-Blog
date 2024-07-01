//modules
import Link from 'next/link'
//lib
import { truncateText } from '@/lib/utils'
import { IPost } from '@/lib/types'

export default function PostsListItem({ post }: { post: IPost }) {
	return (
		<li className="flex flex-col gap-6 w-full shadow-lg p-10 rounded-sm">
			<Link href={`/posts/${post.id}`}>
				<h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
					{post.title}
				</h1>
			</Link>
			<p className="text-lg text-gray-800 text-justify">
				{truncateText(post.body, 100)}
			</p>
		</li>
	)
}
