import PostForm from '@/components/forms/PostForm'
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
// import { redirect } from 'next/navigation'

export default async function CreatePostPage() {
	// const { isAuthenticated } = getKindeServerSession()

	// if (!(await isAuthenticated())) {
	// 	redirect(
	// 		'http://localhost:3000/api/auth/login?post_login_redirect_url=http://localhost:3000/create-post'
	// 	)
	// }

	return (
		<div className="grow flex-center m-6">
			<div className="p-10 rounded-md shadow-xl flex flex-col gap-10 max-w-[600px] min-w-[320px] bg-zinc-50">
				<p className="text-zinc-600 font-medium text-2xl">Create Post</p>
				<PostForm />
			</div>
		</div>
	)
}
