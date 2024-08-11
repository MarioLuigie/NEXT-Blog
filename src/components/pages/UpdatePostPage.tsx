import PostForm from '@/components/forms/PostForm'

export default function UpdatePostPage({
	searchParams,
}: {
	searchParams: any
}) {
	console.log('SEARCH PARAMS***', searchParams)
	return (
		<div className="grow flex-center">
			<div className="p-10 rounded-md shadow-xl flex flex-col gap-10 max-w-[600px] min-w-[400px] bg-zinc-50">
				<p className="text-zinc-600 font-medium text-2xl">Update Post</p>
				<PostForm />
			</div>
		</div>
	)
}
