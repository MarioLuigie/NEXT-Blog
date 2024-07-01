import CreatePostForm from '@/components/forms/CreatePostForm'

export default async function CreatePost() {
	return (
		<div className="grow flex-center">
			<div className="p-10 rounded-md shadow-xl flex flex-col gap-10 max-w-[600px] min-w-[400px]">
				<p className='text-zinc-600 font-medium text-2xl'>Create Post</p>
				<CreatePostForm />
			</div>
		</div>
	)
}
