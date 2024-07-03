import CreatePostForm from '@/components/forms/CreatePostForm'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function CreatePost() {
	const { isAuthenticated } = getKindeServerSession()

	if(await isAuthenticated()) {
		return (
			<div className="grow flex-center">
				<div className="p-10 rounded-md shadow-xl flex flex-col gap-10 max-w-[600px] min-w-[400px]">
					<p className="text-zinc-600 font-medium text-2xl">Create Post</p>
					<CreatePostForm />
				</div>
			</div>
		)
	} else {
		redirect('/api/auth/login?post_login_redirect_url=/create-post')
	}

}
