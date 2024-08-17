//lib
import { getPost } from '@/lib/actions/post.actions'
//components
import PostForm from '@/components/forms/PostForm'

export default async function UpdatePostPage({
	searchParams,
}: {
	searchParams: any
}) {
	console.log('SEARCH PARAMS***', searchParams)

	const { data } = await getPost(searchParams.id)

	console.log("UPDATEPOST RESULT***", data)

	return (
		<div className="grow flex-center">
			<div className="p-10 rounded-md shadow-xl flex flex-col gap-10 max-w-[600px] min-w-[320px] bg-zinc-50">
				<p className="text-zinc-600 font-medium text-2xl">Update Post</p>
				<PostForm post={data} isPostPage={Boolean(searchParams.isPostPage)} />
			</div>
		</div>
	)
}
