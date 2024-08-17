//modules
import Link from 'next/link'
//lib
import { truncateText } from '@/lib/utils'
import { IPost } from '@/lib/types'
//components
import PostSignature from '@/components/content/PostSignature'
import PostDropDownMenu from '@/components/content/PostDropDownMenu'

export default function PostsListItem({ post }: { post: IPost }) {
	return (
		<li className="flex flex-col gap-6 w-full shadow-lg p-4 lg:p-10 rounded-md bg-zinc-50">
			<div className="flex flex-between">
				<PostSignature creator={post.creator} />
				<PostDropDownMenu data={post} />
			</div>
			<Link href={`/posts/${post._id}`}>
				<h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-5">
					{post.title}
				</h1>
				<p className="text-lg text-gray-800 text-justify">
					{truncateText(post.article, 100)}
				</p>
			</Link>
		</li>
	)
}
